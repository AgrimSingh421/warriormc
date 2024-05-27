import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth, db } from "../../firebase";

const AdminNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/admin/panel">
          Admin Panel
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/admin/panel">
                Admin Panel <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/signup">
                Sign Up an Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/playerreports">
                Player Reports
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/unbanportal">
                Unban Appeal Portal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/staffapplication">
                Staff Applications
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/createapost">
                Create a Post
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default AdminNav;
