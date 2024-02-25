import React, { Fragment, useEffect, Suspense } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import PrivateRoutes from "./PrivateRoutes";

const ErrorLayout = React.lazy(() => import("./layouts/ErrorLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const AppLayout = React.lazy(() => import("./layouts/AppLayout"));

const StorybookRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("http://localhost:6006/");
  }, [navigate]);

  return <></>;
};

const isDev = process.env.NODE_ENV === "development";

/**
 *
 * @param {*} props
 * Do all the Routes related implementation in this component
 */

const AppRoutes = (props) => {
  let allowedRoutes = null;

  allowedRoutes = (
    <Fragment>
      <Suspense fallback={<CircularProgress style={{ margin: "auto" }} />}>
        <Routes>
          {isDev && <Route path="/storybook" element={<StorybookRoute />} />}

          <Route path="/auth/*" element={<AuthLayout />} />
          <Route path="/error/*" element={<ErrorLayout />} />
          <Route
            path="/app/*"
            element={
              <PrivateRoutes>
                <AppLayout />
              </PrivateRoutes>
            }
          />
          <Route path="*" element={<Navigate to="/auth/login" replace />} />
        </Routes>
      </Suspense>
    </Fragment>
  );

  return allowedRoutes;
};

export default AppRoutes;
