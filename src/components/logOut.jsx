import { useNavigate } from "react-router-dom";
const LogOut = () => {
  window.location = "/";
  localStorage.removeItem("token");
  return null;
};

export default LogOut;
