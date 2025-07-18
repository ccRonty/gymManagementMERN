import React, { useState } from "react";
import "./Register.css";
import Modal from "../Modal/Modal";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import axios from "axios";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [forgotPass, setForgotPass] = useState(false);
  const [inputField, setInputField] = useState({
    email: "",
    gymName: "",
    userName: "",
    password: "",
    profilePic:
      "https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg",
  });
  const [loaderImage, setLoaderImage] = useState(false);

  const handleOnChange = (event, name) => {
    setInputField({ ...inputField, [name]: event.target.value });
  };
  console.log(inputField);

  const handleCloseButton = () => {
    setForgotPass((prev) => !prev);
  };

  const uploadImg = async (event) => {
    console.log("img uploading");
    setLoaderImage(true);
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    // de7g0bapx
    data.append("upload_preset", "gym-management");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/de7g0bapx/image/upload",
        data
      );
      console.log(response);
      const imgUrl = response.data.url;
      setLoaderImage(false);
      setInputField({ ...inputField, ["profilePic"]: imgUrl });
    } catch (error) {
      console.log(error);
      setLoaderImage(false);
    }
  };

  const handleRegister = async () => {
    await axios
      .post("http://localhost:4000/gym/register", inputField)
      .then((response) => {
        // console.log(response);
        const successMsg = response.data.message;
        toast.success(successMsg);
      })
      .catch((err) => {
        const errMsg = err.response.data.error;
        toast.error(errMsg);
      });
  };

  return (
    <div className="customSignup w-1/3 p-10 mt-20 ml-20 bg-secondary bg-opacity-50 h-[450px] overflow-y-auto">
      <div className="font-sans text-white text-center text-3xl">
        Register Your Gym
      </div>
      <input
        type="email"
        className="w-full my-5 p-2 bg-light rounded-lg"
        placeholder="Enter Email"
        value={inputField.email}
        onChange={(e) => handleOnChange(e, "email")}
      />
      <input
        type="text"
        className="w-full mb-5 p-2 bg-light rounded-lg"
        placeholder="Enter Gym Name"
        value={inputField.gymName}
        onChange={(e) => handleOnChange(e, "gymName")}
      />
      <input
        type="text"
        className="w-full mb-5 p-2 bg-light rounded-lg"
        placeholder="Enter Username"
        value={inputField.userName}
        onChange={(e) => handleOnChange(e, "userName")}
      />
      <input
        type="password"
        className="w-full mb-5 p-2 bg-light rounded-lg"
        placeholder="Enter Password"
        value={inputField.password}
        onChange={(e) => handleOnChange(e, "password")}
      />
      <input
        type="file"
        className="w-[50%] mb-5 p-2 bg-light rounded-lg"
        onChange={(e) => {
          uploadImg(e);
        }}
      />
      {loaderImage && (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="success" />
        </Stack>
      )}

      <img src={inputField.profilePic} className="h-[200px] w-[250px]" />
      <div
        className="p-2 mt-5 w-[100%] border-2 bg-slate-800 text-white mx-auto rounded-lg text-center text-lg hover:bg-black cursor-pointer"
        onClick={() => handleRegister()}
      >
        Sign Up
      </div>
      <div
        className="p-2 mt-2 w-[100%] border-2 bg-slate-800 text-white mx-auto rounded-lg text-center text-lg hover:bg-black cursor-pointer"
        onClick={handleCloseButton}
      >
        Forgot Password
      </div>
      {forgotPass && (
        <Modal
          handleCloseButton={handleCloseButton}
          content={<ForgotPassword />}
          header="Forgot Password"
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default Register;
