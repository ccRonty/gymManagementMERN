import React from "react";

const Login = () => {
  return (
    <div className="w-1/3 p-10 mt-20 ml-20 bg-secondary bg-opacity-50 h-fit">
      <div className="font-sans text-white text-center text-3xl">Login</div>
      <input
        type="text"
        className="w-full my-5 p-2 bg-light rounded-lg"
        placeholder="Enter Username"
      />
      <input
        type="password"
        className="w-full mb-5 p-2 bg-light rounded-lg"
        placeholder="Enter Password"
      />
      <div className="p-2 w-[100%] border-2 bg-slate-800 text-white mx-auto rounded-lg text-center text-lg hover:bg-black cursor-pointer">
        Login
      </div>
    </div>
  );
};

export default Login;
