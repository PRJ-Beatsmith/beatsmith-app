import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";
import { useRegisterMutation } from "../../../slices/userApiSlice";
import { setCredentials } from "../../../slices/authSlice";
import { toast } from "react-toastify";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    birthday: "",
    agreementsAccepted: false,
  });

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

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
    submitRegistration();
  };

  const submitRegistration = async (e) => {
    e.preventDefault();

    const {
      password,
      confirmPassword,
      firstName,
      lastName,
      email,
      birthday,
      username,
    } = registrationData;

    if (password !== confirmPassword) {
      toast.error("Passwörter stimmen nicht überein");
      return;
    }

    try {
      const res = await register({
        firstName,
        lastName,
        username,
        email,
        birthday,
        password,
      }).unwrap();

      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message || error?.message);
    }

    console.log("Einreichung der Registrierung: ", registrationData);
  };

  return (
    <Box className={classes.root}>
      <Suspense fallback={<CircularProgress />}>
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
            path="*"
            element={<Navigate replace to="/auth/register/step1" />}
          />
        </Routes>
      </Suspense>
      {isLoading && <CircularProgress />}
    </Box>
  );
};

export default Register;
