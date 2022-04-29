import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      {" "}
      <nav className="navbar  navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 d-flex flex-row p-2">
            <li className="nav-item p-2">
              <NavLink
                style={({ isActive }) => {
                  return { color: isActive ? "#2c3e50" : "#7f8c8d" };
                }}
                to="/"
              >
                home
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink
                style={({ isActive }) => {
                  return { color: isActive ? "#2c3e50" : "#7f8c8d" };
                }}
                to="/users"
              >
                users
              </NavLink>
            </li>
            {props.user ? (
              <>
                {" "}
                <li className="nav-item p-2">
                  <NavLink
                    style={({ isActive }) => {
                      return { color: isActive ? "#2c3e50" : "#7f8c8d" };
                    }}
                    to="/dashboard"
                  >
                    dashboard
                  </NavLink>
                </li>
                <li className="nav-item p-2">
                  <NavLink
                    style={({ isActive }) => {
                      return { color: isActive ? "#2c3e50" : "#7f8c8d" };
                    }}
                    to="/logout"
                  >
                    logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li className="nav-item p-2">
                  <NavLink
                    style={({ isActive }) => {
                      return { color: isActive ? "#2c3e50" : "#7f8c8d" };
                    }}
                    to="/login"
                  >
                    login
                  </NavLink>
                </li>
                <li className="nav-item p-2">
                  <NavLink
                    style={({ isActive }) => {
                      return { color: isActive ? "#2c3e50" : "#7f8c8d" };
                    }}
                    to="/register"
                  >
                    register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
