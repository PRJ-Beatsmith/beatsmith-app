import React, { Suspense, memo, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, CircularProgress } from "@mui/material";
import { AuthCarousel } from "components/organisms/Carousels";
import { CustomDotsStepper } from "components/atoms/stepper";

const Login = lazy(() => import("components/auth/login"));
const Register = lazy(() => import("components/auth/register"));
const ForgotPassword = lazy(() => import("components/auth/forgotPassword"));

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#232628",
  },
  Container: {
    display: "flex",
    padding: "5% 3%",
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    width: "804px",
    height: "679px",
    flexShrink: 0,
    borderRadius: "12px 0px 0px 12px",
    background:
      "linear-gradient(234deg, rgba(139, 36, 134, 0.50) -12.8%, rgba(174, 47, 117, 0.50) 27.91%, rgba(216, 59, 96, 0.50) 65.83%, rgba(237, 87, 63, 0.50) 94.27%)",
    "@media (max-width: 769px)": {
      display: "none",
    },
  },
  right: {
    width: "516px",
    height: "679px",
    flexShrink: 0,
    borderRadius: "0px 12px 12px 0px",
    background: "#171A1C",
    "@media (max-width: 769px)": {
      borderRadius: "12px",
    },
    position: "relative",
  },
  stepper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    background: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "20px",
  },
  gradientOverlay: {
    background:
      "linear-gradient(234deg, rgba(139, 36, 134, 0.50) -12.8%, rgba(174, 47, 117, 0.50) 27.91%, rgba(216, 59, 96, 0.50) 65.83%, rgba(237, 87, 63, 0.50) 94.27%)",
    width: "100%",
    height: "100%",
    borderRadius: "12px 0px 0px 12px",
  },
  text: {
    color: "#F6F6F6",
    fontFamily: "Ubuntu, sans-serif",
    fontSize: "42px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    textAlign: "left",
    margin: "146px 0 0 58px",
    width: "356px",
  },
});

function AuthLayout() {
  const classes = useStyles();
  let location = useLocation();
  const isRegisterRoute = location.pathname.startsWith("/auth/register/");
  const isForgotPasswordRoute = location.pathname.startsWith(
    "/auth/forgot-password/",
  );

  return (
    <Box className={classes.root}>
      <Box className={classes.Container}>
        <Box className={classes.left}>
          <Box className={classes.gradientOverlay}>
            <AuthCarousel />
          </Box>
        </Box>
        <Box className={classes.right}>
          <Suspense fallback={<CircularProgress style={{ margin: "auto" }} />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/login" index element={<Login />} />
              <Route path="/register/*" element={<Register />} />
              <Route path="/forgot-password/*" element={<ForgotPassword />} />
            </Routes>
          </Suspense>
          {isRegisterRoute && (
            <CustomDotsStepper
              steps={3}
              activeStep={0}
              className={classes.stepper}
            />
          )}
          {isForgotPasswordRoute && (
            <CustomDotsStepper
              steps={3}
              activeStep={0}
              className={classes.stepper}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default memo(AuthLayout);
