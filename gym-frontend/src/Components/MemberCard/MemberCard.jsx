import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";

const MemberCard = () => {
  return (
    <Link
      to={"/member/123"}
      className="bg-white rounded-lg p-3 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white cursor-pointer"
    >
      <div className="w-28 h-28 flex justify-center relative items-center border-2 p-1 mx-auto rounded-full">
        <img
          className="w-full h-full rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0FpBg5Myb9CQ-bQpFou9BY9JXoRG6208_Q&s"
          alt="member profic pic"
        />
        <CircleIcon className="absolute top-0 left-0" sx={{ color: "green" }} />
      </div>

      <div className="mx-auto mt-5 text-center text-xl font-semibold font-mono">
        {"Ronty Das"}
      </div>

      <div className="mx-auto mt-2 text-center text-xl font-semibold font-mono">
        {"+91 " + "7292910029"}
      </div>

      <div className="mx-auto mt-2 text-center text-sm font-light font-mono">
        Next Billing Date: {"02-06-2025"}
      </div>
    </Link>
  );
};

export default MemberCard;
