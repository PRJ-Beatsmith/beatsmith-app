import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Typography, FormGroup, CircularProgress } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import { submitLogin } from "actions/authActions";
import CustomInput from "components/atoms/inputs/CustomInput";
import PasswordInput from "components/atoms/inputs/PasswordInput";
import FormButton from "components/atoms/Buttons/formButton";
import CheckboxInput from "components/atoms/inputs/CheckboxInput";

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
    fontFamily: "Noto Sans",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "133%",
  },
  text2: {
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "142%",
    color: "#636B74",
    paddingBottom: "17px",
  },
  text3: {
    color: "#E94057",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "142%",
    textDecoration: "none",
  },
  form: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
    marginTop: "65px",
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

  passwordOptions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },
  checkbox: {
    fontFamily: "Noto Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "100%",
  },
  checkboxLabel: {
    color: "#EAEEF6",
    fontFamily: "Noto Sans",
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
  const dispatch = useDispatch();

  const submitHandler = (values) => {
    dispatch(submitLogin(values));
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", rememberPassword: true }}
      validateOnChange={true}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = t("Auth.Validate.EmailRequired");
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          const emailError = errors.email;
          errors.email = t("Auth.Validate.InvalidEmailError");
          toast.error(emailError?.data?.message || emailError?.message);
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        try {
          submitHandler(values);
          navigate("/");
        } catch (error) {
          toast.error(t("Auth.Validate.ErrorSignIn"));
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, dirty, setFieldValue }) => (
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
                  <label htmlFor="email" className={classes.label}>
                    {t("Auth.Login.Email")}
                  </label>
                  <Field
                    name="email"
                    component={CustomInput}
                    id="email"
                    fullWidth
                    style={{ width: "400px", height: "50px" }}
                    type="email"
                    autoComplete="current-email"
                    onChange={(event) =>
                      setFieldValue("email", event.target.value)
                    }
                    placeholder={t("Auth.Login.yourEmail")}
                    showEmailStartIcon={true}
                  />
                </FormGroup>
                <FormGroup className={classes.formGroup}>
                  <label htmlFor="password" className={classes.label}>
                    {t("Auth.Login.Password")}
                  </label>
                  <Field
                    component={PasswordInput}
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(event) =>
                      setFieldValue("password", event.target.value)
                    }
                    placeholder={t("Auth.Login.yourPassword")}
                    showEyeIcon={true}
                    showPasswordStartIcon={true}
                  />
                  <Box className={classes.passwordOptions}>
                    <Field
                      component={CheckboxInput}
                      type="checkbox"
                      name="remember"
                      id="remember"
                      onChange={(event) =>
                        setFieldValue("rememberPassword", event.target.checked)
                      }
                      variant="body2"
                      defaultChecked={true}
                      label={t("Auth.Login.rememberPassword")}
                      autoComplete="current-password"
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
                type="submit"
                label={t("Auth.Login.signIn")}
              />
              <Typography variant="body2" className={classes.text3}>
                <Link to="/auth/register/" className={classes.text3}>
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
