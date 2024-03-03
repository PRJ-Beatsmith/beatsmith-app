import React from "react";
import { FormControlLabel, Typography, Checkbox } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
}));

const CheckboxInput = ({ label, variant, onChange, defaultChecked, id }) => {
  const classes = useStyles();

  return (
    <FormControlLabel
      control={
        <Checkbox
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
      label={
        <Typography variant="body2" className={classes.checkboxLabel}>
          {label}
        </Typography>
      }
      id={id}
      variant={variant}
      className={classes.checkbox}
    />
  );
};

export default CheckboxInput;
