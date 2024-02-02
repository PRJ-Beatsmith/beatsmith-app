import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {},
});

const SendInput = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        {t("sendInput.title")}
      </Typography>
    </Box>
  );
};

export default SendInput;
