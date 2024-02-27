import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "utils/contexts/authContexts";

const PrivateRoutes = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/auth/login" replace />;
};

export default PrivateRoutes;
