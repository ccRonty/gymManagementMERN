import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCardIcon from "@mui/icons-material/AddCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link } from "react-router-dom";

const Member = () => {
  return (
    <div className="text-black p-5 w-3/4">
      {/* //block for banner */}
      <div className="border-2 bg-slate-900 flex justify-between w-full text-white rounded-lg p-3">
        <div className="border-2 pr-3 pl-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Add Member <PersonAddIcon />
        </div>
        <div className="border-2 pr-3 pl-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Add Membership <AddCardIcon />
        </div>
      </div>
      {/* block for back to dashboard btn */}
      <Link to={"/dashboard"}>
        <ArrowBackIcon /> Back to Dashboard
      </Link>

      {/* Block for search bar */}
      <div className="mt-5 w-1/2 flex gap-2">
        <input
          type="text"
          className="border-2 w-full p-2 rounded-lg"
          placeholder="Search by name or phone"
        />
        <div className="bg-slate-900 p-3 border-2 text-white rounded-lg cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black">
          <SearchIcon />
        </div>
      </div>

      {/* Block for main members content */}
      <div className="mt-5 text-xl flex justify-between text-slate-900">
        <div>Total Members</div>
        <div className="flex gap-5 ">
          <div>1-10 of 52 members</div>
          <div
            className={`w-8 h-8 cursor-pointer border-2 flex items-center justify-center hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
          >
            <ArrowCircleLeftIcon />
          </div>
          <div
            className={`w-8 h-8 cursor-pointer border-2 flex items-center justify-center hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
          >
            <ArrowCircleRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
