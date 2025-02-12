import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">BeyondCareer</h1>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Dashboard Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="/career-roadmap">Career Roadmap</NavLink>
        </li>
        <li>
          <NavLink to="/mentorship">Mentorship</NavLink>
        </li>
        <li>
          <NavLink to="/job-portal">Job Portal</NavLink>
        </li>
        <li>
          <NavLink to="/resources">Resources</NavLink>
        </li>
        <li>
          <NavLink to="/profile-settings">Profile Settings</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
