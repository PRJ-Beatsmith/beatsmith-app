import React, { Suspense, memo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, CircularProgress } from "@mui/material";
import Login from "components/auth/login";
import Register from "components/auth/register";
import { useTranslation } from "react-i18next";

// bg images:

import BeatSmithLogo from "../../assets/img/logo/beatsmith-logo.png";

import LoginBackground from "../../assets/img/background/Login.png";
import Step1Background from "../../assets/img/background/Step1.png";
import Step2Background from "../../assets/img/background/Step2.png";
import Step3Background from "../../assets/img/background/Step3.png";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    background: "#12141B",
    "@media (max-width: 769px)": {
      borderRadius: "12px",
    },
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
  logo: {
    maxWidth: "100%",
    maxHeight: "100px",
    marginTop: "5px",
    backgroundColor: "#070911",
    borderRadius: "50%",
  },
});

function AuthLayout() {
  const classes = useStyles();
  let location = useLocation();
  const { t } = useTranslation();
  const { backgroundImage, text } = getBackgroundAndText(location.pathname, t);

  return (
    <Box className={classes.root}>
      <Box className={classes.Container}>
        <Box className={classes.left} style={{ backgroundImage }}>
          <Box className={classes.gradientOverlay}>
            <Box
              component="img"
              src={BeatSmithLogo}
              alt="ReAlign Logo"
              className={classes.logo}
            />
            <Typography variant="h1" className={classes.text}>
              {text}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.right}>
          <Suspense fallback={<CircularProgress />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/login" element={<Login />} />
              <Route path="/register/*" element={<Register />} />
            </Routes>
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
}

const getBackgroundAndText = (path, t) => {
  switch (path) {
    case "/auth/register/step1":
      return {
        backgroundImage: `url(${Step1Background})`,
        text: t("Layout.Auth.step1Text"),
      };
    case "/auth/register/step2":
      return {
        backgroundImage: `url(${Step2Background})`,
        text: t("Layout.Auth.step2Text"),
      };
    case "/auth/register/step3":
      return {
        backgroundImage: `url(${Step3Background})`,
        text: t("Layout.Auth.step3Text"),
      };
    case "/auth/login":
      return {
        backgroundImage: `url(${LoginBackground})`,
        text: t("Layout.Auth.loginText"),
      };
    default:
      return {
        backgroundImage: `url(${LoginBackground})`,
        text: t("Layout.Auth.loginText"),
      };
  }
};

export default memo(AuthLayout);
