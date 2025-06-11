import React, { useEffect, useState, useRef, use } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from "@mui/icons-material/People";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ErrorIcon from "@mui/icons-material/Error";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const [accordionDashboard, setAccordionDashboard] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        accordionDashboard &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setAccordionDashboard(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [accordionDashboard]);

  return (
    <div className="w-3/4 text-black p-5 relative">
      <div className="w-full bg-slate-900 text-white rounded-lg flex p-3 justify-between items-center">
        <MenuIcon
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setAccordionDashboard((prev) => !prev);
          }}
        />
        <div>
          <img
            className="w-8 h-8 rounded-3xl border-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s"
            alt="Menu icon image"
          />
        </div>
      </div>

      {accordionDashboard && (
        <div
          ref={ref}
          className="absolute p-3 bg-slate-900 text-white rounded-xl text-lg font-extralight"
        >
          <div>Welcome to our gym management system</div>
          <p>Feel free to ask any questions </p>
        </div>
      )}

      <div className="mt-5 pt-3 bg-slate-100 bg-opacity-50 grid gap-5 grid-cols-3 w-full pb-5 overflow-x-auto h-[80%]">
        {/* This is the card block */}
        <Link to={"/member"}>
          <div className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
            <div className="h-3 rounded-t-lg- bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white">
              <PeopleIcon sx={{ color: "green", fontSize: "50px" }} />
              <p className="text-xl my-3 font-semibold font-mono">
                Joined Members
              </p>
            </div>
          </div>
        </Link>

        {/* This is the card block */}
        <div className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
          <div className="h-3 rounded-t-lg- bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white">
            <SignalCellularAltIcon sx={{ color: "green", fontSize: "50px" }} />
            <p className="text-xl my-3 font-semibold font-mono">
              Monthly Joined
            </p>
          </div>
        </div>

        {/* This is the card block */}
        <div className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
          <div className="h-3 rounded-t-lg- bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white">
            <AccessAlarmIcon sx={{ color: "red", fontSize: "50px" }} />
            <p className="text-xl my-3 font-semibold font-mono">
              Expiring within 3 days
            </p>
          </div>
        </div>

        {/* This is the card block */}
        <div className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
          <div className="h-3 rounded-t-lg- bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white">
            <AccessAlarmIcon sx={{ color: "yellow", fontSize: "50px" }} />
            <p className="text-xl my-3 font-semibold font-mono">
              Expiring within 7 days
            </p>
          </div>
        </div>

        {/* This is the card block */}
        <div className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
          <div className="h-3 rounded-t-lg- bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white">
            <ErrorIcon sx={{ color: "red", fontSize: "50px" }} />
            <p className="text-xl my-3 font-semibold font-mono">Expired</p>
          </div>
        </div>

        {/* This is the card block */}
        <div className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
          <div className="h-3 rounded-t-lg- bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white">
            <RunningWithErrorsIcon sx={{ color: "brown", fontSize: "50px" }} />
            <p className="text-xl my-3 font-semibold font-mono">
              Inactive Members
            </p>
          </div>
        </div>
      </div>

      <div className="md:bottom-4 p-4 w-3/4 mb-4 md:mb-0 absolute bg-black text-white mt-20 rounded-xl text-xl">
        Contact Developer for any techinical error at: 8910605139
      </div>
    </div>
  );
};
