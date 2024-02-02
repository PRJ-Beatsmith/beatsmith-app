import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Box, Button, Typography, FormGroup } from "@mui/material";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import CustomInput from "components/atoms/inputs/CustomInput";

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
    alignItems: "flex-start",
    gap: "20px",
  },
  textBox2: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  text1: {
    fontFamily: "Ubuntu, sans-serif",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  text2: {
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  text3: {
    color: "#E94057",
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
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
    display: "flex",
    alignItems: "flex-start",
    fontFamily: "Ubuntu, sans-serif",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    marginBottom: "5px",
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
  loginOrCreateAcc: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginTop: "82px",
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");

  const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !birthday || !username) {
      toast.error(t("Auth.Register.Step1.emptyFieldsError"));
      return;
    }

    if (!isValidEmail(email)) {
      toast.error(t("Auth.Register.Step1.invalidEmailError"));
      return;
    }

    const age = calculateAge(birthday);
    if (age < 18) {
      toast.error(t("Auth.Register.Step1.under18Error"));
      return;
    }

    onNext({ firstName, lastName, birthday, email, username });
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.textBox}>
        <Typography variant="h1" className={classes.text1}>
          {t("Auth.Register.Step1.whoAreYou")}
        </Typography>
        <Box className={classes.textBox2}>
          <Typography variant="h4" className={classes.text2}>
            {t("Auth.Register.Step1.Welcome")}
          </Typography>
          <Typography variant="h4" className={classes.text2}>
            {t("Auth.Register.Step1.letsStart")}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.form}>
        <Box className={classes.firstLine}>
          <FormGroup className={classes.formGroup}>
            <label className={classes.label} htmlFor="firstName">
              {t("Auth.Register.Step1.yourFirstName")}
            </label>
            <CustomInput
              type="text"
              placeholder="John"
              style={{ width: "200px", height: "50px", flexShrink: 0 }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormGroup>
          <FormGroup className={classes.formGroup}>
            <label className={classes.label} htmlFor="lastName">
              {t("Auth.Register.Step1.yourLastName")}
            </label>
            <CustomInput
              type="text"
              placeholder="Doe"
              style={{ width: "200px", height: "50px", flexShrink: 0 }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormGroup>
        </Box>
        <Box className={classes.secondLine}>
          <FormGroup className={classes.formGroup}>
            <label className={classes.label} htmlFor="email">
              {t("Auth.Register.Step1.yourEmail")}
            </label>
            <CustomInput
              required
              fullWidth
              type="email"
              placeholder="re.align@user.com"
              style={{ width: "440px", height: "50px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
        </Box>
        <Box className={classes.thirdLine}>
          <FormGroup className={classes.formGroup}>
            <label className={classes.label} htmlFor="email">
              {t("Auth.Register.Step1.yourUsername")}
            </label>
            <CustomInput
              fullWidth
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "200px", height: "50px", flexShrink: 0 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormGroup>
          <FormGroup className={classes.formGroup}>
            <label className={classes.label} htmlFor="email">
              {t("Auth.Register.Step1.yourBirthday")}
            </label>
            <CustomInput
              fullWidth
              id="date"
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              style={{ width: "200px", height: "50px", flexShrink: 0 }}
            />
          </FormGroup>
        </Box>
      </Box>
      <Box className={classes.loginOrCreateAcc}>
        <Button
          variant="primary"
          type="button"
          onClick={handleSubmit}
          className={classes.Button}
        >
          {t("Auth.Register.Step1.proceed")}
        </Button>
        <Typography variant="body1" className={classes.text3}>
          <Link to="/auth/login" className={classes.text3}>
            {t("Auth.Register.Step1.askForLogin")}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default StepOne;
