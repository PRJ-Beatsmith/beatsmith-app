import React, { useState } from "react";
import {
  InputAdornment,
  TextField,
  IconButton,
  LinearProgress,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CasinoIcon from "@mui/icons-material/Casino";
import HttpsIcon from "@mui/icons-material/Https";

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
    fontFamily: "Montserrat, sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    color: "#FFF",
  },
  progressBar: {
    width: "100%",
    marginTop: "10px",
  },
});

const PasswordInput = ({
  showCubeIcon,
  showEyeIcon,
  showPasswordStartIcon,
  showProgressBar,
  value,
  placeholder,
  onChange,
  onStrengthChange,
}) => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isValidPassword = (password) => {
    const hasUpperCase = password.match(/[A-Z]/g) || [];
    const hasLowerCase = password.match(/[a-z]/g) || [];
    const hasSpecialChar = password.match(/[!@#$%^&*()_+]/g) || [];
    return (
      hasUpperCase.length >= 2 &&
      hasLowerCase.length >= 2 &&
      hasSpecialChar.length >= 2 &&
      password.length >= 10
    );
  };

  const generatePassword = () => {
    let password = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    const minLength = 10;

    while (password.length < minLength || !isValidPassword(password)) {
      password = Array.from(
        { length: 10 },
        () => characters[Math.floor(Math.random() * characters.length)],
      ).join("");
    }
    onChange({ target: { value: password } });
  };

  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 10) strength += 25;
    if (password.match(/[A-Z]/g)) strength += 25;
    if (password.match(/[a-z]/g)) strength += 25;
    if (password.match(/[0-9]/g) || password.match(/[!@#$%^&*()_+]/g))
      strength += 25;
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

  const handleChange = (event) => {
    const { value } = event.target;
    onChange(event);

    const strength = getPasswordStrength(value);
    if (onStrengthChange) {
      onStrengthChange(strength);
    }
  };

  return (
    <>
      <TextField
        type={showPassword ? "text" : "password"}
        fullWidth
        required
        placeholder={placeholder}
        name="password"
        value={value}
        onChange={handleChange}
        className={classes.root}
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
          fullWidth
          className={classes.progressBar}
          sx={{
            width: "100%",
            borderRadius: "6px",
            marginTop: "10px",
            "& .MuiLinearProgress-bar": {
              backgroundColor: getProgressBarColor(getPasswordStrength(value)),
            },
          }}
        />
      )}
    </>
  );
};

export default PasswordInput;
