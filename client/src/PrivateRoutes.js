import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  setIsAuthenticated(false);

  return isAuthenticated ? children : <Navigate to="/auth/login" replace />;
};

export default PrivateRoutes;
