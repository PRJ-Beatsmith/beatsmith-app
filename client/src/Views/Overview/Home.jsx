/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { RoutSwitchButton } from "@/components/atoms/Buttons/RoutSwitchButton";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  routeBtn: {
    padding: "1vw 5vw",
  },
  sec1: {
    position: "relative",
    paddingLeft: "70px",
    paddingTop: "100px",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    fontSize: "50px",
  },
  right: {
    position: "absolute",
    right: 0,
    top: 0,
    // zIndex: 1000,
    marginLeft: "100px",
  },
  sec2: {},
  sec3: {},
  sec4: {},
  sec5: {},
}));

export default memo(function HomeOverviewPage() {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box className={classes.root}>
      <Box className={classes.sec1}>
        <Box className={classes.left}>
          <Box
            component="img"
            src="/img/Beatsmith-logo.png"
            alt="logo"
            sx={{
              width: "100%",
              height: "auto",
              [theme.breakpoints.down("mobile")]: {
                height: "20%",
              },
              [theme.breakpoints.down("tablet")]: {
                height: "50%",
              },
              [theme.breakpoints.down("laptop")]: {
                height: "70%",
              },
              [theme.breakpoints.down("desktop")]: {
                height: "100%",
              },
            }}
          />
          <Typography variant="h1">{t("Overview.about.Title")}</Typography>
          <RoutSwitchButton
            textKey="Overview.about.SignIn"
            to="/auth"
            typographyClass={classes.routeBtn}
          />
        </Box>
        <Box className={classes.right}>
          <Box
            component="img"
            src="/img/Polygons.png"
            alt="polygons"
            sx={{
              width: "100%",
              height: "auto",
              [theme.breakpoints.up("desktop")]: {
                height: "100%",
              },
              [theme.breakpoints.down("desktop")]: {
                height: "100%",
              },
              [theme.breakpoints.down("laptop")]: {
                height: "80%",
              },
              [theme.breakpoints.down("tablet")]: {
                height: "0%",
                width: 0,
                display: "none",
              },
              [theme.breakpoints.down("mobile")]: {
                display: "none",
                width: 0,
                height: "0%",
              },
              [theme.breakpoints.down(600)]: {
                opacity: 0,
              },
            }}
          />
        </Box>
      </Box>
      <Box className={classes.sec2}></Box>
      <Box className={classes.sec3}></Box>
      <Box className={classes.sec4}></Box>
      <Box className={classes.sec5}></Box>
    </Box>
  );
});
