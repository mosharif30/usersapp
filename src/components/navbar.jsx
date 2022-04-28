import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      {" "}
      <nav class="navbar  navbar-light bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav me-auto mb-2 d-flex flex-row p-2">
            <li class="nav-item p-2">
              <NavLink
                style={({ isActive }) => {
                  return { color: isActive ? "#2c3e50" : "#7f8c8d" };
                }}
                to="/"
              >
                home
              </NavLink>
            </li>
            <li class="nav-item p-2">
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
                <li class="nav-item p-2">
                  <NavLink
                    style={({ isActive }) => {
                      return { color: isActive ? "#2c3e50" : "#7f8c8d" };
                    }}
                    to="/dashboard"
                  >
                    dashboard
                  </NavLink>
                </li>
                <li class="nav-item p-2">
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
                <li class="nav-item p-2">
                  <NavLink
                    style={({ isActive }) => {
                      return { color: isActive ? "#2c3e50" : "#7f8c8d" };
                    }}
                    to="/login"
                  >
                    login
                  </NavLink>
                </li>
                <li class="nav-item p-2">
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
