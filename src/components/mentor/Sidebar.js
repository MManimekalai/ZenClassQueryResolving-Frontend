import React from "react";
import { Link } from "react-router-dom";
import img1 from "../img/zen.png";
import { useNavigate } from 'react-router-dom';

// Sidebar
function Sidebar() {
  const navigate = useNavigate();
  const handleTextClick = () => {
    navigate('/mentor/dashboard');
  };
  return (
    <ul
      className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <div
        className="sidebar-brand d-flex align-items-center justify-content-center" onClick={handleTextClick}>
        <div className="sidebar-brand-icon ">
          <img src={img1} className="img-logo" alt="logo" />
        </div>
        <div className="sidebar-brand-text mx-3" >Query</div>
      </div>
      <hr className="sidebar-divider" />
      <hr className="sidebar-divider" />
      <hr className="sidebar-divider my-0" />
      <li className="nav-item">
        <Link
          to={"/mentor/view-tickets"}
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fa fa-question-circle" aria-hidden="true"></i>
          <span style={{ color: "white" }}>Ticket Queue</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />
      <li className="nav-item">
        <Link
          to={"/mentor/viewAssignedtickets"}
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fa fa-question-circle" aria-hidden="true"></i>
          <span style={{ color: "white" }}>Assigned Tickets</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <li className="nav-item">
        <Link
          to={"/mentor/closed-tickets"}
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fa fa-question-circle" aria-hidden="true"></i>
          <span style={{ color: "white" }}>Closed Tickets</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
