import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography, FormGroup, CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CustomInput from "components/atoms/inputs/CustomInput";
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
  loginOrCreateAcc: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    marginTop: "53px",
  },
  firstLine: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
  },
  thirdLine: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

const calculateAge = (birthday) => {
  const birthDate = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

const StepOne = ({ onNext }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const validateSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("Auth.Validate.InvalidEmailError"))
      .required(t("Auth.Validate.EmailRequired")),
    firstName: Yup.string()
      .min(3, t("Auth.Validate.ToShort"))
      .max(50, t("Auth.Validate.ToLong"))
      .required(t("Auth.Validate.FirstNameRequired")),
    lastName: Yup.string()
      .min(3, t("Auth.Validate.ToShort"))
      .max(50, t("Auth.Validate.ToLong"))
      .required(t("Auth.Validate.LastNameRequired")),
    birthday: Yup.date()
      .required(t("Auth.Validate.BirthdayRequired"))
      .test("age", t("Auth.Validate.Under16Error"), (value) => {
        return calculateAge(value) >= 16;
      }),
    username: Yup.string()
      .min(4, t("Auth.Validate.CharactersToShort", { min: 4 }))
      .max(20, t("Auth.Validate.CharactersToLong", { max: 20 }))
      .required(t("Auth.Validate.UsernameRequired")),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        username: "",
        birthday: "",
      }}
      validateOnChange={true}
      validationSchema={validateSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        try {
          onNext(values);
          navigate("/step2");
        } catch (error) {
          toast.error(t("Auth.Validate.ErrorSignUp"));
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched, dirty, setFieldValue, isValid }) => (
        <>
          {isSubmitting && <CircularProgress style={{ margin: "auto" }} />}
          <Box className={classes.root}>
            <Form>
              <Box className={classes.textBox}>
                <Typography variant="h4" className={classes.text1}>
                  {t("Auth.Register.Step1.Welcome")}
                </Typography>
                <Typography variant="h4" className={classes.text2}>
                  {t("Auth.Register.Step1.letsStart")}
                </Typography>
              </Box>
              <Box className={classes.form}>
                <Box className={classes.firstLine}>
                  <FormGroup className={classes.formGroup}>
                    <label className={classes.label} htmlFor="firstName">
                      {t("Auth.Register.Step1.FirstName")}
                    </label>
                    <Field
                      component={CustomInput}
                      name="firstName"
                      id="firstName"
                      style={{ width: "200px", height: "50px", flexShrink: 0 }}
                      type="text"
                      onChange={(event) =>
                        setFieldValue("firstName", event.target.value)
                      }
                      placeholder={t("Auth.Register.Step1.yourFirstName")}
                      required
                      autoComplete="given-name"
                    />
                    {touched.firstName && errors.firstName && (
                      <Box style={{ color: "red" }}>{errors.firstName}</Box>
                    )}
                  </FormGroup>
                  <FormGroup className={classes.formGroup}>
                    <label className={classes.label} htmlFor="lastName">
                      {t("Auth.Register.Step1.LastName")}
                    </label>
                    <Field
                      component={CustomInput}
                      name="lastName"
                      id="lastName"
                      style={{ width: "200px", height: "50px", flexShrink: 0 }}
                      type="text"
                      onChange={(event) =>
                        setFieldValue("lastName", event.target.value)
                      }
                      placeholder={t("Auth.Register.Step1.yourLastName")}
                      required
                      autoComplete="family-name"
                    />
                    {touched.lastName && errors.lastName && (
                      <Box style={{ color: "red" }}>{errors.lastName}</Box>
                    )}
                  </FormGroup>
                </Box>
                <Box className={classes.secondLine}>
                  <FormGroup className={classes.formGroup}>
                    <label className={classes.label} htmlFor="email">
                      {t("Auth.Register.Step1.Email")}
                    </label>
                    <Field
                      name="email"
                      component={CustomInput}
                      id="email"
                      fullWidth
                      style={{ width: "440px", height: "50px" }}
                      type="email"
                      onChange={(event) =>
                        setFieldValue("email", event.target.value)
                      }
                      placeholder={t("Auth.Register.Step1.yourEmail")}
                      showEmailStartIcon={true}
                      autoComplete="email"
                    />
                    {touched.email && errors.email && (
                      <Box style={{ color: "red" }}>{errors.email}</Box>
                    )}
                  </FormGroup>
                </Box>
                <Box className={classes.thirdLine}>
                  <FormGroup className={classes.formGroup}>
                    <label className={classes.label} htmlFor="username">
                      {t("Auth.Register.Step1.Username")}
                    </label>
                    <Field
                      component={CustomInput}
                      name="username"
                      id="username"
                      style={{ width: "200px", height: "50px", flexShrink: 0 }}
                      type="text"
                      onChange={(event) =>
                        setFieldValue("username", event.target.value)
                      }
                      placeholder={t("Auth.Register.Step1.yourUsername")}
                      required
                    />
                    {touched.username && errors.username && (
                      <Box style={{ color: "red" }}>{errors.username}</Box>
                    )}
                  </FormGroup>
                  <FormGroup className={classes.formGroup}>
                    <label className={classes.label} htmlFor="birthday">
                      {t("Auth.Register.Step1.Birthday")}
                    </label>
                    <Field
                      component={CustomInput}
                      name="birthday"
                      id="birthday"
                      style={{ width: "200px", height: "50px", flexShrink: 0 }}
                      type="date"
                      onChange={(event) =>
                        setFieldValue("birthday", event.target.value)
                      }
                      placeholder={t("Auth.Register.Step1.yourBirthday")}
                      required
                      fullWidth
                    />
                    {touched.birthday && errors.birthday && (
                      <Box style={{ color: "red" }}>{errors.birthday}</Box>
                    )}
                  </FormGroup>
                </Box>
              </Box>
              <Box className={classes.loginOrCreateAcc}>
                <FormButton
                  disabled={isSubmitting || !isValid || !dirty}
                  variant="primary"
                  type="submit"
                  label={t("Auth.Register.Step1.proceed")}
                  showNextIcon={true}
                />
                <Typography variant="body1" className={classes.text3}>
                  <Link to="/auth/login" className={classes.text3}>
                    {t("Auth.Register.Step1.askForLogin")}
                  </Link>
                </Typography>
              </Box>
            </Form>
          </Box>
        </>
      )}
    </Formik>
  );
};

export default StepOne;
