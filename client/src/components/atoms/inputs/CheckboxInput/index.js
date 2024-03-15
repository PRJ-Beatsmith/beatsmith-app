import React from "react";
import { FormControlLabel, Typography, Checkbox } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  checkbox: {
    fontFamily: "Noto Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "100%",
  },
  checkboxLabel: {
    color: "#EAEEF6",
    display: "flex",
    alignItems: "flex-start",
    textAlign: "left",
    fontFamily: "Noto Sans",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "100%",
    maxWidth: "330px",
  },
}));

const CheckboxInput = ({
  label,
  variant,
  onChange,
  defaultChecked,
  checked,
  id,
}) => {
  const classes = useStyles();

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          sx={{
            "&.Mui-checked": {
              color: "#E94057",
            },
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        />
      }
      label={<Typography className={classes.checkboxLabel}>{label}</Typography>}
      id={id}
      variant={variant}
      className={classes.checkbox}
    />
  );
};

export default CheckboxInput;
