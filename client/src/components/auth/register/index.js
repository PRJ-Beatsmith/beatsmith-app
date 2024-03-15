import React, { useState, Suspense, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, CircularProgress } from "@mui/material";
import { PolicyModal } from "components/organisms/Modals";
import { useDispatch, useSelector } from "react-redux";
import { updateSignUpData } from "actions/authActions";

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

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signUpData = useSelector((state) => state.auth.signUpData);

  const handleNext = (data) => {
    dispatch(updateSignUpData(data));
  };

  const submitRegistrationData = () => {
    alert(JSON.stringify(signUpData));
  };

  const handleModalOpen = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    navigate(`/auth/register/step${signUpData.onboardingStep}`);
  }, [signUpData.onboardingStep, navigate]);

  return (
    <Box className={classes.root}>
      <Suspense fallback={<CircularProgress style={{ margin: "auto" }} />}>
        <Routes>
          <Route path="/step1" element={<StepOne onNext={handleNext} />} />
          <Route path="/step2" element={<StepTwo onNext={handleNext} />} />
          <Route
            path="/step3"
            element={
              <StepThree
                onNext={submitRegistrationData}
                onOpenModal={handleModalOpen}
                onCloseModal={handleModalClose}
              />
            }
          />
          <Route
            path="*"
            element={<Navigate replace to="/auth/register/step1" />}
          />
        </Routes>
      </Suspense>
      <PolicyModal
        open={modalOpen}
        onClose={handleModalClose}
        modalContent={modalContent}
        modalTitle={modalTitle}
      />
    </Box>
  );
};

export default Register;
