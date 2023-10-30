// Sidebar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {
    let Navigate = useNavigate();

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link to="/admin/dashboard">
            <div className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Admin Dashboard</div>
            </div>
            </Link>

            {/* Sidebar - Links */}
            <Link to="/admin/create-user">
                <li className="nav-item">
                    <div className="nav-link">
                        <i className="fas fa-user-plus"></i>
                        <span>Add User</span>
                    </div>
                </li>
            </Link>
            <Link to="/admin/view-user">
                <li className="nav-item">
                    <div className="nav-link">
                        <i className="fas fa-user"></i>
                        <span>Manage Users</span>
                    </div>
                </li>
            </Link>
            <Link to="/admin/ticket-queue">
                <li className="nav-item">
                    <div className="nav-link">
                        <i className="fas fa-clipboard-list"></i>
                        <span>Assign Ticket</span>
                    </div>
                </li>
            </Link>
            <Link to="/admin/ticket-list">
                <li className="nav-item">
                    <div className="nav-link">
                        <i className="fas fa-comments"></i>
                        <span>View Ticket</span>
                    </div>
                </li>
            </Link>
        </ul>
    );
}

export default Sidebar;
