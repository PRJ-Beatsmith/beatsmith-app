import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "30px 40px",
  },
}));

const PasswordForgotStep3 = ({ onNext }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography>PasswordForgotStep 3</Typography>
    </Box>
  );
};

export default PasswordForgotStep3;
