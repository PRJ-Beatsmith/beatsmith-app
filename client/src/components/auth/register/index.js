import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, CircularProgress } from "@mui/material";
import { useSignUp } from "utils/contexts/signUpContext";

const StepOne = React.lazy(() => import("./StepOne"));
const StepTwo = React.lazy(() => import("./StepTwo"));
const StepThree = React.lazy(() => import("./StepThree"));

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
  const { updateSignUpData, submitRegistrationData } = useSignUp();

  // const [registrationData, setRegistrationData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   username: "",
  //   email: "",
  //   password: "",
  //   birthday: "",
  //   allAgreementsAccepted: false,
  //   termsOfUse: false,
  //   agePolicy: false,
  //   privacyPolicy: false,
  // });

  const handleNext = (data) => {
    updateSignUpData(data);
  };

  return (
    <Box className={classes.root}>
      <Suspense fallback={<CircularProgress style={{ margin: "auto" }} />}>
        <Routes>
          <Route path="/step1" element={<StepOne onNext={handleNext} />} />
          <Route path="/step2" element={<StepTwo onNext={handleNext} />} />
          <Route
            path="/step3"
            element={<StepThree onNext={submitRegistrationData} />}
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
