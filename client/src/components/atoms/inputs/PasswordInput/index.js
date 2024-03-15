import React, { useState, useEffect, memo } from "react";
import {
  Box,
  Typography,
  InputAdornment,
  TextField,
  IconButton,
  LinearProgress,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CasinoIcon from "@mui/icons-material/Casino";
import HttpsIcon from "@mui/icons-material/Https";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles({
  root: {
    width: "400px",
    height: "50px",
    flexShrink: 0,
    borderRadius: "4px",
    background: "#0B0D0E",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
    color: "#FFF",
  },
  progressBar: {
    width: "100%",
    marginTop: "10px",
  },
  guidelines: {
    marginTop: "24px",
    width: "100%",
  },
  icon: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  title1: {
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "150%",
    textAlign: "left",
  },
  title2: {
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
    textAlign: "left",
    paddingBottom: "10px",
  },
  validationItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
  },
  validIcon: {
    color: "green",
    marginRight: "8px",
  },
  invalidIcon: {
    color: "red",
    marginRight: "8px",
  },
  conditionsText: {
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
  },
});

const PasswordInput = memo(
  ({
    showCubeIcon,
    showEyeIcon,
    showPasswordStartIcon,
    showProgressBar,
    showGuidelines,
    value,
    placeholder,
    onChange,
    onStrengthChange,
    onValidationFail,
    id,
    autoComplete,
    fullWidth,
  }) => {
    const classes = useStyles();
    const { t } = useTranslation();

    const [showPassword, setShowPassword] = useState(false);
    const [passwordValidation, setPasswordValidation] = useState({
      hasUpperCase: false,
      hasLowerCase: false,
      hasNumbers: false,
      hasSpecialChar: false,
      hasMinLength: false,
    });

    const handleMouseDownPassword = (event) => event.preventDefault();
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const isValidPassword = (password) => {
      const hasUpperCase = /[A-Z].*[A-Z]/.test(password);
      const hasLowerCase = /[a-z].*[a-z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      console.log("password", password);
      return (
        hasUpperCase &&
        hasLowerCase &&
        hasSpecialChar &&
        hasNumbers &&
        password.length >= 10
      );
    };

    const checkValidations = (password) => {
      setPasswordValidation({
        hasUpperCase: /[A-Z]/?.test(password),
        hasLowerCase: /[a-z]/?.test(password),
        hasNumbers: /\d/?.test(password),
        hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        hasMinLength: password?.length >= 10,
      });
      console.log("value22222", password);
    };

    const generatePassword = () => {
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(),.?":{}|<>';
      const minLength = 10;
      let password = "";
      let tries = 0;

      while (!isValidPassword(password)) {
        if (tries > 100) {
          onValidationFail && onValidationFail();
          return;
        }

        password = Array.from(
          { length: minLength },
          () => characters[Math.floor(Math.random() * characters?.length)],
        ).join("");
      }
      onChange({ target: { value: password } });
    };

    const getPasswordStrength = (password) => {
      if (!password) {
        return 0;
      }
      let strength = 0;
      if (password?.length >= 10) strength += 25;
      if (/[A-Z]/.test(password)) strength += 25;
      if (/[a-z]/.test(password)) strength += 25;
      if (/\d/.test(password) || /[!@#$%^&*(),.?":{}|<>]/.test(password))
        strength += 25;
      console.log("strength1", password);
      console.log("strength3", strength);
      return strength;
    };

    const getProgressBarColor = (strength) => {
      if (strength < 50) {
        return "#FF0000";
      } else if (strength < 75) {
        return "#FF8800";
      } else if (strength < 100) {
        return "#FFA500";
      } else {
        return "#008000";
      }
    };

    useEffect(() => {
      checkValidations(value);

      const strength = getPasswordStrength(value);

      onStrengthChange && onStrengthChange(strength);

      console.log("strength", strength);
    }, [value, onStrengthChange]);

    // const handleChange = (event) => {
    //   // const { value } = event.target;
    //   onChange(event);
    //   console.log("value", event);
    // };

    return (
      <>
        <TextField
          type={showPassword ? "text" : "password"}
          required
          fullWidth={fullWidth}
          placeholder={placeholder}
          name="password"
          value={value}
          autoComplete={autoComplete}
          onChange={onChange}
          className={classes.root}
          id={id}
          sx={{
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "2px solid #EC4E49",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {showPasswordStartIcon && <HttpsIcon />}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {showCubeIcon && (
                  <IconButton onClick={generatePassword}>
                    <CasinoIcon />
                  </IconButton>
                )}
                {showEyeIcon && (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
        {showProgressBar && (
          <LinearProgress
            variant="determinate"
            value={getPasswordStrength(value)}
            className={classes.progressBar}
            sx={{
              width: "100%",
              borderRadius: "6px",
              marginTop: "10px",
              "& .MuiLinearProgress-bar": {
                backgroundColor: getProgressBarColor(
                  getPasswordStrength(value),
                ),
              },
            }}
          />
        )}
        {showGuidelines && (
          <Box className={classes.guidelines}>
            <Box className={classes.guidelinesTitle}>
              <Typography className={classes.title1}>
                {t("Auth.Validate.PasswordGuidelines")}
              </Typography>
            </Box>
            <Box className={classes.guidelinesSubTitle}>
              <Typography className={classes.title2}>
                {t("Auth.Validate.PasswordGuidelinesText")}
              </Typography>
            </Box>
            <Box className={classes.guidelinesConditions}>
              {Object.keys(passwordValidation).map((key) => (
                <Box key={key} className={classes.validationItem}>
                  {passwordValidation[key] ? (
                    <CheckIcon className={classes.validIcon} />
                  ) : (
                    <CloseIcon className={classes.invalidIcon} />
                  )}
                  <Typography className={classes.conditionsText}>
                    {t(`Auth.Validate.${key}`)}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </>
    );
  },
);

export default PasswordInput;
