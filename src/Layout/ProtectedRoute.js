import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Store/AuthContext";

export const PrivateRoutes = () => {
  const { currentUser } = useAuth();
  return currentUser?.accessToken === true ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
