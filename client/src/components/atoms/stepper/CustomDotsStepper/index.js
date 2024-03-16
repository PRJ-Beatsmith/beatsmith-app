import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, MobileStepper } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {},
  stepper: {
    "&.MuiMobileStepper-dot": {
      backgroundColor: "#ff0000",
      width: theme.spacing(2),
      height: theme.spacing(2),
    },
    "&.MuiMobileStepper-dotActive": {
      backgroundColor: "#ff0000 !important",
      color: "#ff0000",
    },
  },
}));

const CustomDotsStepper = ({ steps = 2, activeStep = 0, ...otherProps }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <MobileStepper
        variant="dots"
        steps={steps}
        position="static"
        activeStep={activeStep}
        className={classes.stepper}
        {...otherProps}
      />
    </Box>
  );
};

export default CustomDotsStepper;
