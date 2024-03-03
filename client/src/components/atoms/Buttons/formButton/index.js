import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    display: "flex",
    minHeight: "40px",
    padding: "4px 16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    borderRadius: "6px",
    background: "#E94057",
    color: "inherit",
    "&:hover": {
      background: "#C53248",
    },
  },
  buttonDisabled: {
    background: "#0c0d0e",
    color: "#666666",
    "&:hover": {
      background: "#0c0d0e",
    },
  },
  textLabel: {
    fontFamily: "Noto Sans",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "14px",
    color: "inherit",
  },
}));

const FormButton = ({
  onClick,
  disabled,
  variant,
  type,
  color,
  label,
  showNextIcon,
  showPreviousIcon,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Button
        variant={variant}
        color={color}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${classes.button} ${disabled ? classes.buttonDisabled : ""}`}
      >
        {showPreviousIcon && <ArrowBackIcon />}
        <Typography className={classes.textLabel}>{label}</Typography>
        {showNextIcon && <ArrowForwardIcon />}
      </Button>
    </Box>
  );
};

export default FormButton;
