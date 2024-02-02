import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

const StepTwo = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h1">Step 2</Typography>
    </Box>
  );
};

export default StepTwo;
