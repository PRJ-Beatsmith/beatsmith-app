import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../../slices/userApiSlice";
import { setCredentials } from "../../../slices/authSlice";
import { Box, Typography, FormGroup, CircularProgress } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

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
      const res = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Box className={classes.root}>
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
          <CustomInput
            fullWidth
            style={{ width: "400px", height: "50px" }}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={t("Auth.Login.yourUsername")}
            showUserStartIcon={true}
          />
        </FormGroup>
        <FormGroup className={classes.formGroup}>
          <label htmlFor="password" className={classes.label}>
            {t("Auth.Login.Password")}
          </label>
          <PasswordInput
            value={password}
            onChange={handlePasswordChange}
            placeholder={t("Auth.Login.yourPassword")}
            showEyeIcon={true}
            showPasswordStartIcon={true}
            onStrengthChange={setPasswordStrength}
          />
          <Box className={classes.passwordOptions}>
            <CheckboxInput
              label={t("Auth.Login.rememberPassword")}
              defaultChecked={true}
              variant="body2"
            />
            <Typography variant="body2" className={classes.text3}>
              <Link to="/auth/forgot-password" className={classes.text3}>
                {t("Auth.Login.forgotPassword")}
              </Link>
            </Typography>
          </Box>
        </FormGroup>
      </Box>

      {isLoading && <CircularProgress style={{ margin: "auto" }} />}

      <Box className={classes.loginOrCreateAcc}>
        <FormButton
          disabled={
            isLoading || !username || !password || passwordStrength < 100
          }
          variant="primary"
          type="button"
          onClick={handleSubmit}
          label={t("Auth.Login.signIn")}
        />
        <Typography variant="body2" className={classes.text3}>
          <Link to="/auth/register/step1" className={classes.text3}>
            {t("Auth.Login.askForRegister")}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
