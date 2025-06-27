import React, { use, useState } from "react";

const ForgotPassword = () => {
  const [emailSubmit, setEmailSubmit] = useState(false);
  const [otpValidate, setOtpValidate] = useState(false);
  const [buttonName, setButtonName] = useState("Submit Email Address");
  const [inputField, setInputField] = useState({
    email: "",
    otp: "",
    newPassword: "",
  });

  const handleOnChange = (e, name) => {
    setInputField({ ...inputField, [name]: e.target.value });
  };
  console.log(inputField);

  const handleSubmit = () => {
    if (!emailSubmit) {
      setEmailSubmit(true);
      setButtonName("Submit OTP");
    } else if (emailSubmit && !otpValidate) {
      setOtpValidate(true);
      setButtonName("Submit New Password");
    }
  };

  return (
    <div className="w-full">
      <div className="w-full mb-2">
        <div>Enter Your Email</div>
        <input
          type="email"
          className="w-1/2 p-2 bg-light rounded-lg border-2 border-slate-400"
          placeholder="Enter Email"
          value={inputField.email}
          onChange={(e) => handleOnChange(e, "email")}
        />
      </div>

      {emailSubmit && (
        <div className="w-full mb-5">
          <div>Enter Your OTP</div>
          <input
            type="email"
            className="w-1/2 p-2 bg-light rounded-lg border-2 border-slate-400"
            placeholder="Enter OTP"
            value={inputField.otp}
            onChange={(e) => handleOnChange(e, "otp")}
          />
        </div>
      )}

      {otpValidate && (
        <div className="w-full mb-5">
          <div>Enter Your New Password</div>
          <input
            type="email"
            className="w-1/2 p-2 bg-light rounded-lg border-2 border-slate-400"
            placeholder="Enter New Password"
            value={inputField.newPassword}
            onChange={(e) => handleOnChange(e, "newPassword")}
          />
        </div>
      )}

      <div
        className="bg-slate-800 text-white mx-auto w-2/3 rounded-lg p-3 text-center font-semibold cursor-pointer hover:bg-black hover:text-black hover:border-2"
        onClick={() => handleSubmit()}
      >
        {buttonName}
      </div>
    </div>
  );
};

export default ForgotPassword;
