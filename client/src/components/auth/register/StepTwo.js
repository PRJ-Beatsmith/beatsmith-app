import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, FormGroup, CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PasswordInput from "components/atoms/inputs/PasswordInput";
import FormButton from "components/atoms/Buttons/formButton";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "30px 40px",
  },
  textBox: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  text1: {
    fontFamily: "Noto Sans",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "133%",
  },
  text2: {
    color: "#636B74",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "142%",
  },
  form: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "30px",
    marginTop: "50px",
  },
  label: {
    color: "#F0F4F8",
    display: "flex",
    alignItems: "flex-start",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
    marginBottom: "5px",
  },
  goToAgreement: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    marginTop: "53px",
  },
});

const StepTwo = ({ onNext }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const validateSchema = Yup.object().shape({
    password: Yup.string()
      .min(10, t("Auth.Validate.PasswordTooShort"))
      .matches(/[a-zA-Z]/, t("Auth.Validate.PasswordLetterError"))
      .matches(/[0-9]/, t("Auth.Validate.PasswordNumberError"))
      .matches(/[!@#$%^&*()_+-]/, t("Auth.Validate.PasswordSpecialCharError"))
      .required(t("Auth.Validate.PasswordRequired")),
  });

  return (
    <Formik
      initialValues={{ password: "" }}
      validateOnChange={true}
      validationSchema={validateSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        try {
          values = {
            ...values,
            onboardingStep: 3,
          };
          onNext(values);
        } catch (error) {
          toast.error(t("Auth.Validate.ErrorSignUp"));
        }
        setSubmitting(false);
      }}
    >
      {({
        isSubmitting,
        values,
        errors,
        touched,
        dirty,
        setFieldValue,
        isValid,
      }) => (
        <>
          {isSubmitting && <CircularProgress style={{ margin: "auto" }} />}
          <Box className={classes.root}>
            <Form>
              <Box className={classes.textBox}>
                <Typography variant="h4" className={classes.text1}>
                  {t("Auth.Register.Step2.Password")}
                </Typography>
                <Typography variant="h4" className={classes.text2}>
                  {t("Auth.Register.Step2.PasswordText")}
                </Typography>
              </Box>
              <Box className={classes.form}>
                <Box className={classes.passwordLine}>
                  <FormGroup>
                    <label className={classes.label} htmlFor="password">
                      {t("Auth.Register.Step2.Password")}
                    </label>
                    <PasswordInput
                      name="password"
                      id="password"
                      value={values.password}
                      style={{ width: "440px", height: "50px" }}
                      placeholder={t("Auth.Register.Step2.yourPassword")}
                      autoComplete="new-password"
                      onChange={(event) => {
                        setFieldValue("password", event.target.value);
                      }}
                      showEyeIcon={true}
                      showPasswordStartIcon={true}
                      showCubeIcon={true}
                      showProgressBar={true}
                      fullWidth={true}
                      showGuidelines={true}
                    />
                  </FormGroup>
                </Box>
              </Box>
              <Box className={classes.goToAgreement}>
                <FormButton
                  disabled={isSubmitting || !isValid || !dirty}
                  variant="primary"
                  type="submit"
                  label={t("Auth.Register.Step2.proceed")}
                  showNextIcon={true}
                />
              </Box>
            </Form>
          </Box>
        </>
      )}
    </Formik>
  );
};

export default StepTwo;
