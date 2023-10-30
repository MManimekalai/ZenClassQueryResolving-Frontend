import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Navbar
function Navbar() {
  const [userName, setuserName] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setuserName(localStorage.getItem("userName"));
  });
  
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <h3>Mentor Portal</h3>
      <ul className="navbar-nav ml-auto">
        <h5 className="username align-right">{userName}</h5>
        <div className="topbar-divider d-none d-sm-block"></div>
        <button onClick={handleLogout} type="button" className="btn btn-danger shadow-sm">
          Logout
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
