import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";

const NavBar = ({ user }) => {
  const logout = async () => {
    if (window.confirm("Are you sure you want to log out") === true) {
      await auth.signOut();
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          Warrior MC
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
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            {user ? null : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signin">
                    Sign In
                  </NavLink>
                </li>
              </>
            )}
            {user ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/store">
                    Store
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/reportaplayer">
                    Report A Player
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/unbanappeal">
                    Unban Appeal
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/applyforstaff">
                    Apply for Staff
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger" onClick={logout}>
                    Log Out
                  </button>
                </li>
              </>
            ) : null}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
