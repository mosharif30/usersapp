import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import Dashboard from "./dashboard";

const useAuth = () => {
  const user = localStorage.getItem("token");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = (props) => {
  const auth = useAuth();

  return auth ? <Dashboard /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
