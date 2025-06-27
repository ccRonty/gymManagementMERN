import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Switch from "react-switch";

const MemberDetails = () => {
  const navigate = useNavigate();

  const [status, setStatus] = useState("Pending");
  const [renew, setRenew] = useState(false);

  const handleSwitchBtn = () => {
    let statusss = status === "Active" ? "Pending" : "Active";
    setStatus(statusss);
  };

  return (
    <div className="w-3/4 text-black p-5">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="border-2 w-fit text-xl font-sans text-white p-2 rounded-xl bg-slate-900 cursor-pointer"
      >
        <ArrowBackIcon /> Go Back
      </div>
      <div className="mt-10 p-2">
        <div className="h-[100%] h-fit flex">
          <div className="w-1/3 mx-auto">
            <img
              src="https://www.shutterstock.com/image-photo/black-man-fitness-weightlifting-kettlebell-600nw-2310881869.jpg"
              alt=""
              className="w-full mx-auto"
            />
          </div>
          <div className="w-2/3 mt-5 p-5 text-xl">
            <div className="mt-1 mb-1 text-2xl font-semibold"> Name: Ronty</div>
            <div className="mt-1 mb-1 text-2xl font-semibold">
              {" "}
              Mobile: +918282828282
            </div>
            <div className="mt-1 mb-1 text-2xl font-semibold">
              {" "}
              Address: Kolkata
            </div>
            <div className="mt-1 mb-1 text-2xl font-semibold">
              {" "}
              Joined Date: 02/06/2025
            </div>
            <div className="mt-1 mb-1 text-2xl font-semibold">
              {" "}
              Next Bill Date: 02/07/2025
            </div>
            <div className="mt-1 mb-1 text-2xl font-semibold flex gap-4">
              Status :{" "}
              <Switch
                onColor="#6366F1"
                checked={status === "Active"}
                onChange={() => {
                  handleSwitchBtn();
                }}
              />
            </div>
            <div
              onClick={() => {
                setRenew((prev) => !prev);
              }}
              className={`mt-1 rounded-lg p-3 border-2 border-slate-900 text-center w-full md:w-1/2 cursor-pointer hover:text-white  hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${
                renew && status === "Active"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                  : null
              }`}
            >
              Renew
            </div>

            {renew && status === "Active" ? (
              <div className="rounded-lg mt-5 mb-5 h-fit bg-slate-50 md:w-[100%]">
                <div className="w-full">
                  <div className="my-5 ">
                    <div>Membership</div>
                    <select
                      name=""
                      id=""
                      className="w-full border-2 p-2 rounded-lg"
                    >
                      <option value="">1 Month Plan</option>
                      <option value="">2 Month Plan</option>
                      <option value="">3 Month Plan</option>
                      <option value="">6 Month Plan</option>
                    </select>
                    <div
                      className={`mt-2 rounded-lg p-3 border-2 border-slate-900 text-center w-1/2 mx-auto cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white`}
                    >
                      Save
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
