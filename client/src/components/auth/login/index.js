import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../../slices/userApiSlice";
import { setCredentials } from "../../../slices/authSlice";
import {
  Box,
  Button,
  Typography,
  FormGroup,
  FormControlLabel,
  CircularProgress,
  Checkbox,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import CustomInput from "components/atoms/inputs/CustomInput";
import PasswordInput from "components/atoms/inputs/PasswordInput";

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
    gap: "20px",
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
    fontFamily: "Ubuntu, sans-serif",
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
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    textDecoration: "none",
  },
  passwordOptions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },
  checkbox: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
});

const Login = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/", { replace: true });
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.textBox}>
        <Typography variant="h1" className={classes.text1}>
          {t("Auth.Login.signIn")}
        </Typography>
        <Typography variant="h4" className={classes.text2}>
          {t("Auth.Login.signInForFunction")}
        </Typography>
      </Box>
      <Box className={classes.form}>
        <FormGroup className={classes.formGroup}>
          <label htmlFor="email" className={classes.label}>
            {t("Auth.Login.yourUsername")}
          </label>
          <CustomInput
            fullWidth
            style={{ width: "400px", height: "50px" }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="re.align@user.com"
          />
        </FormGroup>
        <FormGroup className={classes.formGroup}>
          <label htmlFor="password" className={classes.label}>
            {t("Auth.Login.yourPassword")}
          </label>
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showEyeIcon={true}
          />
          <Box className={classes.passwordOptions}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={t("Auth.Login.rememberPassword")}
              className={classes.checkbox}
            />
            <Typography variant="body1" className={classes.text3}>
              <Link to="/auth/forgot-password" className={classes.text3}>
                {t("Auth.Login.forgotPassword")}
              </Link>
            </Typography>
          </Box>
        </FormGroup>
      </Box>

      {isLoading && <CircularProgress />}

      <Box className={classes.loginOrCreateAcc}>
        <Button
          disabled={isLoading}
          variant="primary"
          type="button"
          onClick={handleSubmit}
          className={classes.Button}
        >
          {t("Auth.Login.signIn")}
        </Button>
        <Typography variant="body1" className={classes.text3}>
          <Link to="/auth/register/step1" className={classes.text3}>
            {t("Auth.Login.askForRegister")}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
