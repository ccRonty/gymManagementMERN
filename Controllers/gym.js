const gymModel = require('../Models/gym');
const bcrypt = require('bcryptjs')
const crypto = require('crypto');
const nodemailer = require("nodemailer");

exports.register = async (req, res) => {
  try {
    const { email, userName, password, profilePic, gymName } = req.body;
    // console.log(email, userName, password, profilePic, gymName);
    const isExistsUsername = await gymModel.findOne({ userName });
    const isExistsEmail = await gymModel.findOne({ email });
    if (isExistsUsername) {
      res.status(400).json({ success: false, error: "Username already exists. Try with another username." })
    } else if (isExistsEmail) {
      res.status(400).json({ success: false, error: "Email already exists!" })
    } else {
      const hasedPassword = await bcrypt.hash(password, 10);
      // console.log(hasedPassword)
      const newGym = new gymModel({ email, userName, password: hasedPassword, profilePic, gymName })
      await newGym.save();
      res.status(200).json({ success: true, message: "Gym successfully registered", data: newGym })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error
    })
  }
}

exports.login = async (req, res) => {
  // console.log("login route")
  try {
    const { userName, password } = req.body;
    const gym = await gymModel.findOne({ userName });
    if (gym && await bcrypt.compareSync(password, gym.password)) {

      res.json({ success: true, message: "Logging in successfull", gym })
    } else {
      res.status(400).json({ success: false, message: "Wrong Credentials" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error
    })
  }
}

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

//forgot password
exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const gym = await gymModel.findOne({ email });
    if (gym) {
      const buffer = crypto.randomBytes(4); // get 4 bytes random 
      const token = buffer.readUInt32BE(0) % 900000 + 10000; //Modulo to get 6-digit number
      // console.log(token)

      gym.resetPasswordToken = token;
      gym.resetPasswordExpires = Date.now() + 3600000; // 1 hour exired date

      await gym.save(); //token & token expiry save at DB

      //now send otp to email
      const mailOptions = {
        from: "ronty.das@codeclouds.com",
        to: email,
        subject: "Password Reset",
        text: `Please Enter the OTP ${token} to reset your password`, // plain‑text body
        //html: "<b>Hello world?</b>", // HTML body
      }

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.status(500).json({
            success: "false",
            message: "Server Error",
            error
          })
        } else {
          res.status(200).json({
            success: true,
            message: "OTP sent to your email",
          })
        }
      })

    } else {
      res.status(400).json({
        success: false,
        message: "Gym not found",
        error
      })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error
    })
  }
}

//check otp
exports.checkOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const gym = await gymModel.findOne({
      email,
      resetPasswordToken: otp,
      resetPasswordExpires: { $gt: Date.now() }
    })

    if (!gym) {
      return res.status(400).json({ success: false, message: "OTP is invalid or expired" })
    }
    return res.status(200).json({ success: true, message: "OTP verified successfully" });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error
    })
  }
}

//now reset password
exports.resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const gym = await gymModel.findOne({ email });
    // console.log(gym)
    if (!gym) {
      return res.status(400).json({ success: false, message: "Some Technical issue. Try again later." })
    }
    const hasedPassword = await bcrypt.hash(newPassword, 10);
    gym.password = hasedPassword;
    gym.resetPasswordToken = undefined;
    gym.resetPasswordExpires = undefined;

    await gym.save();

    res.status(200).json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Errors",
      error
    })
  }
}