import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import SunnyIcon from "@mui/icons-material/Sunny";
// import DarkModeIcon from "@mui/icons-material/DarkMode";

const Sidebar = () => {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState("");
  const location = useLocation(); // get the current page path url

  const greetingMsg = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning ☀️");
    } else if (currentHour < 17) {
      setGreeting("Good Afternoon🌞");
    } else if (currentHour < 21) {
      setGreeting("Good Evening 🌙");
    } else {
      setGreeting("Good Night 🌛");
    }
  };

  useEffect(() => {
    greetingMsg();
  }, []);

  const handleLogout = async () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="w-1/4 h-[100vh] border-2 bg-black text-white p-5">
      <div className="text-center text-3xl font-extralight">Just Fit Gym</div>
      <div className="flex gap-5 my-5">
        <div className="w-[120px] h-[100px] rounded-lg">
          <img
            className="w-full h-full rounded-full"
            src="https://c4.wallpaperflare.com/wallpaper/103/248/971/fitness-girls-hd-4k-wallpaper-preview.jpg"
            alt="gym pic"
          />
        </div>
        <div>
          <div className="text-sm">{greeting}</div>
          <div className="text-lg font-semibold mt-2">Admin</div>
        </div>
      </div>
      <div className="mt-10 py-5 border-t-2 border-gray-700">
        <Link
          to="/dashboard"
          className={`flex gap-2 font-semibold text-xl bg-slate-800 p-3 text-white no-underline rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black mb-3 ${
            location.pathname === "/dashboard"
              ? "border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              : null
          }`}
        >
          <div>
            <HomeIcon />
          </div>
          <div>Dashboard</div>
        </Link>
        <Link
          to="/member"
          className={`flex gap-2 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer text-white no-underline hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black mb-3 ${
            location.pathname === "/member"
              ? "border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              : null
          }`}
        >
          <div>
            <PeopleIcon />
          </div>
          <div>Members</div>
        </Link>
        <div
          onClick={() => handleLogout()}
          className="flex gap-2 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black mb-3"
        >
          <div>
            <ExitToAppIcon />
          </div>
          <div>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
