import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [loginField, setLoginField] = useState({ userName: "", password: "" });

  const handleOnChange = (event, name) => {
    setLoginField({ ...loginField, [name]: event.target.value });
  };
  // console.log(loginField);

  const navigate = useNavigate();

  const handleLogin = async () => {
    // sessionStorage.setItem("isLogin", true);
    // navigate("/dashboard");
    await axios
      .post("http://localhost:4000/gym/login", loginField, {
        withCredentials: true,
      })
      .then((response) => {
        // console.log(response);
        localStorage.setItem("gymName", response.data.gym.gymName);
        localStorage.setItem("gymPic", response.data.gym.profilePic);
        localStorage.setItem("isLogin", true);
        localStorage.setItem("token", response.data.token);

        navigate("/dashboard");
      })
      .catch((err) => {
        const errMsg = err.response.data.message;
        // console.log(errMsg);
        toast.error(errMsg);
      });
  };

  return (
    <div className="w-1/3 p-10 mt-20 ml-20 bg-secondary bg-opacity-50 h-fit">
      <div className="font-sans text-white text-center text-3xl">Login</div>
      <input
        type="text"
        className="w-full my-5 p-2 bg-light rounded-lg"
        placeholder="Enter Username"
        value={loginField.userName}
        onChange={(event) => {
          handleOnChange(event, "userName");
        }}
      />
      <input
        type="password"
        className="w-full mb-5 p-2 bg-light rounded-lg"
        placeholder="Enter Password"
        value={loginField.password}
        onChange={(event) => {
          handleOnChange(event, "password");
        }}
      />
      <div
        className="p-2 w-[100%] border-2 bg-slate-800 text-white mx-auto rounded-lg text-center text-lg hover:bg-black cursor-pointer"
        onClick={() => {
          handleLogin();
        }}
      >
        Login
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
