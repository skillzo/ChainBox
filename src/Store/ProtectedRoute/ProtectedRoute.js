import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const PrivateRoutes = ({ children }) => {
  const { isAuth } = useAuth();
  return !isAuth ? <Outlet /> : <Navigate to="/login" />;
};
