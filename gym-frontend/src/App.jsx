import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./index.css";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";
import Member from "./Pages/Member/Member";
import GeneralUser from "./Pages/GeneralUser/GeneralUser";
import MemberDetails from "./Pages/MemberDetails/MemberDetails";

function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let isLoggedIn = sessionStorage.getItem("isLogin");
    if (isLoggedIn) {
      setIsLogin(true);
      // navigate("/dashboard");
    } else {
      setIsLogin(false);
      navigate("/");
    }
  }, [sessionStorage.getItem("isLogin")]);

  return (
    <div className="flex">
      {isLogin && <Sidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/member" element={<Member />} />
        <Route path="/specific/:page" element={<GeneralUser />} />
        <Route path="/member/:id" element={<MemberDetails />} />
      </Routes>
    </div>
  );
}

export default App;
