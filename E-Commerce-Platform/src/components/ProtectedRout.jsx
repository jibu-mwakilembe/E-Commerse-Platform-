import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isLoggedIn, user } = useAuthStore();

  if (!user || !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
