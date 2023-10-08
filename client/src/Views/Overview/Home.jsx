/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@mui/material/styles";
import { RoutSwitchButton } from "@/components/atoms/Buttons/RoutSwitchButton";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
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
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box className={classes.root}>
      <Box className={classes.sec1}>
        <Box className={classes.left}>
          <img
            src="/img/Beatsmith-logo.png"
            alt="logo"
            style={{
              width:
                window.innerWidth <= theme.breakpoints.values.md
                  ? "40vw"
                  : window.innerWidth <= theme.breakpoints.values.sm
                  ? "50vw"
                  : "30vw",
            }}
          />
          <h1>{t("Overview.about.Title")}</h1>
          <RoutSwitchButton
            textKey="Overview.about.SignIn"
            to="/auth"
            typographyClass={classes.routeBtn}
          />
        </Box>
        <Box className={classes.right}>
          <img
            src="/img/Polygons.png"
            alt="polygons"
            style={{
              width:
                window.innerWidth <= theme.breakpoints.values.md
                  ? "40vw"
                  : window.innerWidth <= theme.breakpoints.values.sm
                  ? "50vw"
                  : "30vw",
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
