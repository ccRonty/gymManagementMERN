import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="customSignup w-1/3 p-10 mt-20 ml-20 bg-secondary bg-opacity-50 h-[450px] overflow-y-auto">
      <div className="font-sans text-white text-center text-3xl">
        Register Your Gym
      </div>
      <input
        type="email"
        className="w-full my-5 p-2 bg-light rounded-lg"
        placeholder="Enter Email"
      />
      <input
        type="text"
        className="w-full mb-5 p-2 bg-light rounded-lg"
        placeholder="Enter Gym Name"
      />
      <input
        type="text"
        className="w-full mb-5 p-2 bg-light rounded-lg"
        placeholder="Enter Username"
      />
      <input
        type="password"
        className="w-full mb-5 p-2 bg-light rounded-lg"
        placeholder="Enter Password"
      />
      <input type="file" className="w-[50%] mb-5 p-2 bg-light rounded-lg" />
      <img
        src="https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg"
        className="h-[200px] w-[250px]"
      />
      <div className="p-2 mt-5 w-[100%] border-2 bg-slate-800 text-white mx-auto rounded-lg text-center text-lg hover:bg-black cursor-pointer">
        Sign Up
      </div>
      <div className="p-2 mt-2 w-[100%] border-2 bg-slate-800 text-white mx-auto rounded-lg text-center text-lg hover:bg-black cursor-pointer">
        Forgot Password
      </div>
    </div>
  );
};

export default Register;
