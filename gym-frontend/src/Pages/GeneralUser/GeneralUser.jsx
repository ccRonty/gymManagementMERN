import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MemberCard from "../../Components/MemberCard/MemberCard";

const GeneralUser = () => {
  const [headerText, setHeaderText] = useState("");

  useEffect(() => {
    const func = sessionStorage.getItem("func");
    functionCall(func);
  }, []);

  const functionCall = async (func) => {
    switch (func) {
      case "monthlyJoined":
        setHeaderText("Monthly Joined Members");
        break;

      case "threeDayExpire":
        setHeaderText("Expiring in 3 Days");
        break;

      case "sevenDaysExpire":
        setHeaderText("Expiring in 7 Days");
        break;

      case "expired":
        setHeaderText("Expired Members");
        break;

      case "inactiveMembers":
        setHeaderText("Inactive Members");
        break;
    }
  };

  return (
    <div className="text-black p-5 w-3/4 flex-col">
      <div className="border-2 bg-slate-900 flex justify-between w-full text-white rounded-lg p-3 ">
        <Link
          to={"/dashboard"}
          className="border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black"
        >
          <ArrowBackIcon /> Back to dashboard
        </Link>
      </div>
      <div className="mt-5 text-xl text-slate-900">
        {/* {"5 monthly joined members"} */}
        {headerText}
      </div>

      <div className="bg-slate-100 p-5 mt-5 rounded-lg grid gap-2 grid-cols-4 overflow-x-auto h-[65%]">
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>
    </div>
  );
};

export default GeneralUser;
