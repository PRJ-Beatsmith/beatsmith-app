import React, { Suspense, useState, lazy } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { defaultSignUp } from "core/auth";

const StepOne = lazy(() => import("./StepOne"));
const StepTwo = lazy(() => import("./StepTwo"));
const StepThree = lazy(() => import("./StepThree"));
const StepFour = lazy(() => import("./StepFour"));

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

const Register = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    birthday: "",
    agreementsAccepted: false,
  });

  const submitRegistration = async (values) => {
    const { email, password } = values;
    try {
      await defaultSignUp(email, password);
      toast.success("Registration successful");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const goToNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      navigate(`/auth/register/step${currentStep + 1}`);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      navigate(`/auth/register/step${currentStep - 1}`);
    }
  };

  const handleStepOneData = (data) => {
    setRegistrationData({ ...registrationData, ...data });
    goToNextStep();
  };

  const handleStepTwoData = (data) => {
    setRegistrationData({ ...registrationData, ...data });
    goToNextStep();
  };

  const handleStepThreeData = (data) => {
    setRegistrationData({ ...registrationData, ...data });
    goToNextStep();
  };

  const handleStepFourData = (data) => {
    setRegistrationData({ ...registrationData, ...data });
    submitRegistration();
  };

  return (
    <Box className={classes.root}>
      <Suspense fallback={<CircularProgress style={{ margin: "auto" }} />}>
        <Routes>
          <Route
            path="/step1"
            element={<StepOne onNext={handleStepOneData} />}
          />
          <Route
            path="/step2"
            element={
              <StepTwo onNext={handleStepTwoData} onBack={goToPreviousStep} />
            }
          />
          <Route
            path="/step3"
            element={
              <StepThree
                onBack={goToPreviousStep}
                onNext={handleStepThreeData}
              />
            }
          />
          <Route
            path="/step4"
            element={
              <StepFour onBack={goToPreviousStep} onNext={handleStepFourData} />
            }
          />
          <Route
            path="*"
            element={<Navigate replace to="/auth/register/step1" />}
          />
        </Routes>
      </Suspense>
    </Box>
  );
};

export default Register;
