import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import img1 from "../img/zen.png";

// Sidebar for student
function Sidebar() {

    const [role, setrole] = useState();
 
  useEffect(() => {
    setrole(localStorage.getItem("role"));
  });

  const params = useParams();
  return (
    <ul
      className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon ">
          <img src={img1} className="img-logo" alt="logo" />
        </div>
        <div className="sidebar-brand-text mx-3">{role}</div>
      </a>

      <hr className="sidebar-divider my-0" />
      <li className="nav-item">
        <Link
          to={"/student/dashboard"}
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fa fa-question-circle" aria-hidden="true"></i>
          <span color="blue">Queries</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />
    </ul>
  );
}

export default Sidebar;
