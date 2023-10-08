/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ThemeProvider } from "@mui/material";
import { useMode } from "@/core/theme";
import { RoutSwitchButton } from "@/components/atoms/Buttons/RoutSwitchButton";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  routeBtn: {
    padding: "10px 100px",
  },
  sec1: {
    paddingLeft: "70px",
    paddingTop: "100px",
    minHeight: "80vh",
  },
  sec2: {},
  sec3: {},
  sec4: {},
  sec5: {},
}));

export default memo(function AboutOverviewPage() {
  const classes = useStyles();
  const [theme] = useMode();
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <Box className={classes.sec1}>
          <img src="" alt="Logo" />
          <h1 style={{ width: "1080px", fontSize: "100px" }}>
            {t("Overview.about.Title")}
          </h1>
          <RoutSwitchButton
            textKey="Overview.about.SignIn"
            to="/auth"
            typographyClass={classes.routeBtn}
          />
        </Box>
        <Box className={classes.sec2}></Box>
        <Box className={classes.sec3}></Box>
        <Box className={classes.sec4}></Box>
        <Box className={classes.sec5}></Box>
      </Box>
    </ThemeProvider>
  );
});
