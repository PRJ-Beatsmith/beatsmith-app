import React, { Suspense, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateForgotPasswordData } from "actions/authActions";

const PasswordForgotStep1 = React.lazy(() => import("./PasswordForgotStep1"));
const PasswordForgotStep2 = React.lazy(() => import("./PasswordForgotStep2"));
const PasswordForgotStep3 = React.lazy(() => import("./PasswordForgotStep3"));

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

const ForgotPassword = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const forgotPasswordData = useSelector(
    (state) => state.auth.forgotPasswordData,
  );

  const handleNext = (data) => {
    dispatch(updateForgotPasswordData(data));
  };

  useEffect(() => {
    navigate(
      `/auth/forgot-password/step${forgotPasswordData.forgotPasswordStep}`,
    );
  }, [forgotPasswordData.forgotPasswordStep, navigate]);

  return (
    <Box className={classes.root}>
      <Suspense fallback={<CircularProgress style={{ margin: "auto" }} />}>
        <Routes>
          <Route
            path="/step1"
            element={<PasswordForgotStep1 onNext={handleNext} />}
          />
          <Route
            path="/step2"
            element={<PasswordForgotStep2 onNext={handleNext} />}
          />
          <Route
            path="/step3"
            element={<PasswordForgotStep3 onNext={handleNext} />}
          />
          <Route
            path="/*"
            element={<Navigate to="/auth/forgot-password/step1" />}
          />
        </Routes>
      </Suspense>
    </Box>
  );
};

export default ForgotPassword;
