import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./index.css";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";
import Member from "./Pages/Member/Member";

function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let isLoggedIn = sessionStorage.getItem("isLogin");
    if (isLoggedIn) {
      setIsLogin(true);
      // navigate("/dashboard");
    } else {
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
      </Routes>
    </div>
  );
}

export default App;
