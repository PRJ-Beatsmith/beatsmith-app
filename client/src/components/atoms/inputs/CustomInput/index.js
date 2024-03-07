import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const useStyles = makeStyles({
  root: {
    flexShrink: 0,
    borderRadius: "4px",
    background: "#0B0D0E",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
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
  autoComplete,
  id,
  name,
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
      autoComplete={autoComplete}
      label={label}
      placeholder={placeholder}
      {...otherProps}
      className={classes.root}
      name={name}
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
        "& .MuiInputBase-input": {
          color: "white",
        },
        "& .MuiSvgIcon-root": {
          color: "white",
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
