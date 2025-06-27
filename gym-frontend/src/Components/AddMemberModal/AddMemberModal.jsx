import React, { useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const AddMemberModal = () => {
  const [inputField, setInputField] = useState({
    memberName: "",
    mobileNum: "",
    address: "",
    joiningDate: "",
    membership: "",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0FpBg5Myb9CQ-bQpFou9BY9JXoRG6208_Q&s",
  });

  const [loaderImage, setLoaderImage] = useState(false);

  const handleOnChange = (e, name) => {
    setInputField({ ...inputField, [name]: e.target.value });
  };
  console.log(inputField);

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

  return (
    <div className="text-black">
      <div className="grid gap-5 grid-cols-2 text-lg">
        <input
          type="text"
          className="border-2 rounded-md h-12 text-lg w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 "
          placeholder="Member Name"
          value={inputField.memberName}
          onChange={(e) => {
            handleOnChange(e, "memberName");
          }}
        />
        <input
          type="text"
          className="border-2 rounded-md h-12 text-lg w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 "
          placeholder="Mobile Number"
          value={inputField.mobileNum}
          onChange={(e) => {
            handleOnChange(e, "mobileNum");
          }}
        />
        <input
          type="text"
          className="border-2 rounded-md h-12 text-lg w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 "
          placeholder="Address"
          value={inputField.address}
          onChange={(e) => {
            handleOnChange(e, "address");
          }}
        />
        <input
          type="date"
          className="border-2 rounded-md h-12 text-lg w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 "
          value={inputField.joiningDate}
          onChange={(e) => {
            handleOnChange(e, "joiningDate");
          }}
        />
        <select
          className="border-2 rounded-md h-12 text-lg w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 "
          value={inputField.membership}
          onChange={(e) => {
            handleOnChange(e, "membership");
          }}
        >
          <option>1 Month Membership</option>
          <option>2 Month Membership</option>
          <option>3 Month Membership</option>
          <option>6 Month Membership</option>
        </select>

        <input type="file" className=" " onChange={(e) => uploadImg(e)} />

        <div className="w-1/4">
          {loaderImage && (
            <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
              <LinearProgress color="success" />
            </Stack>
          )}
          <img
            className="w-full h-full rounded-full bg-light rounded-lg"
            src={inputField.profilePic}
            alt="img"
          />
        </div>
        <div className="p-3 border-2 w-28 text-lg h-14 text-center bg-slate-900 text-white rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
          Register
        </div>
      </div>
    </div>
  );
};

export default AddMemberModal;
