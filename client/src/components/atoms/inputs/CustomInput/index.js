import React from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexShrink: 0,
    borderRadius: "4px",
    border: "2px solid #EC4E49",
    background: "#191919",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    color: "#FFF",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiOutlinedInput-root": {
      "&::focus fieldset": {
        border: "none",
      },
    },
    "& .MuiInputAdornment-root .MuiSvgIcon-root": {
      color: "#FFF",
    },
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
        },
        "& .MuiInputAdornment-root .MuiSvgIcon-root": {
          color: "white", // Farbe auf Weiß setzen
        },
      }}
      required
    />
  );
};

export default CustomInput;
