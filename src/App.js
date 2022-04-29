import "./App.css";
import React, { Component } from "react";
import Users from "./components/users";
import Home from "./components/home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import User from "./components/user";
import NotFound from "./components/notFound";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import LogOut from "./components/logOut";
import ProtectedRoutes from "./components/ProtectedRoutes";

class App extends Component {
  state = { user: null };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.setState({ user: null });
      return;
    }
    const response = {
      data: {
        user: {
          name: "mohammad",
          email: "mohammad@gmail.com",
        },
      },
    };
    if (!response.data.user) {
      this.setState({ user: null });
      return;
    }
    this.setState({ user: response.data.user });
  }
  render() {
    return (
      <>
        <Navbar user={this.state.user}></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate replace to="/" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoutes />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
          <Route path="users/:id" element={<User />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </>
    );
  }
}

export default App;
