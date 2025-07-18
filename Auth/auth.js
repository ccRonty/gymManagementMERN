const gymModel = require('../Models/gym');
const jwt = require('jsonwebtoken');


const auth = async (req, res, next) => {
  try {
    const token = req.cookies.cookie_token;
    if (!token) {
      res.status(401).json({ success: false, message: "No Token found. Auth denied!" })
    }
    const decodeToken = jwt.verify(token, process.env.JWT_SecretKey)

    req.gym = await gymModel.findById(decodeToken.gymId).select('-password');

    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Token is not valid", error })
  }
}

module.exports = auth;