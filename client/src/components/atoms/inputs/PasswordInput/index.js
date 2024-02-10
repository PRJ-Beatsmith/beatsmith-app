import React, { useState } from "react";
import { InputAdornment, TextField, IconButton } from "@mui/material";
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
});

const PasswordInput = ({
  showCubeIcon,
  showEyeIcon,
  value,
  placeholder,
  onChange,
  showPasswordStartIcon,
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

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      fullWidth
      required
      placeholder={placeholder}
      name="password"
      value={value}
      onChange={onChange}
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
            border: "2px solid #EC4E49", // Roten Rand bei Fokus anzeigen
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
  );
};

export default PasswordInput;
