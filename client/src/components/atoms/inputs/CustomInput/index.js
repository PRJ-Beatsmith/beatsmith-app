import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const useStyles = makeStyles({
  root: {
    flexShrink: 0,
    borderRadius: "4px",
    // border: "2px solid #EC4E49",
    background: "#0B0D0E",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    color: "#FFF",
  },
});

const CustomInput = ({
  type,
  value,
  onChange,
  label,
  placeholder,
  fullWidth,
  style,
  showEmailStartIcon,
  showUserStartIcon,
  ...otherProps
}) => {
  const classes = useStyles();

  return (
    <TextField
      style={style}
      fullWidth={fullWidth}
      type={type}
      value={value}
      onChange={onChange}
      label={label}
      placeholder={placeholder}
      {...otherProps}
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
      required
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {showEmailStartIcon && <EmailIcon />}
            {showUserStartIcon && <AccountCircleIcon />}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CustomInput;
