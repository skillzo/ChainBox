import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Store/AuthContext";

export const PrivateRoutes = () => {
  const { isAuth } = useAuth();
  return isAuth === true ? <Outlet /> : <Navigate to="/login" />;
};
