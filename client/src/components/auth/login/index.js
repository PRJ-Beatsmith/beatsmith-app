import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography, FormGroup, CircularProgress } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import CustomInput from "components/atoms/inputs/CustomInput";
import PasswordInput from "components/atoms/inputs/PasswordInput";
import FormButton from "components/atoms/Buttons/formButton";
import CheckboxInput from "components/atoms/inputs/CheckboxInput";
import { defaultSignIn } from "core/auth";

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
    gap: "3px",
  },
  text1: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "133%",
  },
  text2: {
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "142%",
    color: "#636B74",
    paddingBottom: "17px",
  },
  form: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
    marginTop: "65px",
  },
  formGroup: {},
  label: {
    display: "flex",
    alignItems: "flex-start",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    marginBottom: "5px",
  },
  loginOrCreateAcc: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginTop: "82px",
  },
  Button: {
    display: "flex",
    padding: "10px 30px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "7px",
    background: "#E94057",
  },
  text3: {
    color: "#E94057",
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
    textDecoration: "none",
  },
  passwordOptions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },
  checkbox: {
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "100%",
  },
  checkboxLabel: {
    color: "#EAEEF6",
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "100%",
  },
});

const Login = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    const { email, password } = values;
    try {
      await defaultSignIn(email, password);
      toast.success("Login erfolgreich!");
      navigate("/");
    } catch (error) {
      toast.error("Login fehlgeschlagen! Bitte überprüfen Sie Ihre Angaben.");
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", rememberPassword: true }}
      validateOnChange={true}
      validate={(values) => {
        const errors = {};
        if (!values.emailField) {
          errors.emailField = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)
        ) {
          const emailError = errors.emailField;
          errors.emailField = "Invalid email address";
          toast.error(emailError?.data?.message || emailError?.message);
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        await new Promise((r) => setTimeout(r, 500));
        await submitHandler(values);
        setSubmitting(false);
      }}
    >
      {({ submitForm, isSubmitting, dirty, setFieldValue, values }) => (
        <>
          {isSubmitting && <CircularProgress style={{ margin: "auto" }} />}
          <Box className={classes.root}>
            <Form>
              <Box className={classes.textBox}>
                <Typography variant="h1" className={classes.text1}>
                  {t("Auth.Login.signIn")}
                </Typography>
                <Typography variant="h6" className={classes.text2}>
                  {t("Auth.Login.signInForFunction")}
                </Typography>
              </Box>
              <Box className={classes.form}>
                <FormGroup className={classes.formGroup}>
                  <label htmlFor="text" className={classes.label}>
                    {t("Auth.Login.Username")}
                  </label>
                  <Field
                    component={CustomInput}
                    fullWidth
                    style={{ width: "400px", height: "50px" }}
                    type="text"
                    onChange={(event) =>
                      setFieldValue("emailField", event.target.value)
                    }
                    placeholder={t("Auth.Login.yourUsername")}
                    showUserStartIcon={true}
                  />
                </FormGroup>
                <FormGroup className={classes.formGroup}>
                  <label htmlFor="password" className={classes.label}>
                    {t("Auth.Login.Password")}
                  </label>
                  <Field
                    component={PasswordInput}
                    onChange={(event) =>
                      setFieldValue("passwordField", event.target.value)
                    }
                    placeholder={t("Auth.Login.yourPassword")}
                    showEyeIcon={true}
                    showPasswordStartIcon={true}
                  />
                  <Box className={classes.passwordOptions}>
                    <Field
                      component={CheckboxInput}
                      type="checkbox"
                      name="rememberPassword"
                      onChange={(event) =>
                        setFieldValue("rememberPassword", event.target.checked)
                      }
                      variant="body2"
                      defaultChecked={true}
                      label={t("Auth.Login.rememberPassword")}
                    />
                    <Typography variant="body2" className={classes.text3}>
                      <Link
                        to="/auth/forgot-password"
                        className={classes.text3}
                      >
                        {t("Auth.Login.forgotPassword")}
                      </Link>
                    </Typography>
                  </Box>
                </FormGroup>
              </Box>
            </Form>
            <Box className={classes.loginOrCreateAcc}>
              <FormButton
                disabled={!dirty}
                variant="primary"
                type="button"
                onClick={submitHandler}
                label={t("Auth.Login.signIn")}
              />
              <Typography variant="body2" className={classes.text3}>
                <Link to="/auth/register/step1" className={classes.text3}>
                  {t("Auth.Login.askForRegister")}
                </Link>
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </Formik>
  );
};

export default Login;
