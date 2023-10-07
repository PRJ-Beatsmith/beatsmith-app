import { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { ReactComponent as NotFoundSvg } from "assets/svgs/404.svg";
import { Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {
    backgroundColor: "f2f2f2",
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  svg: {
    display: "block",
    margin: "auto",
    width: 400,
    height: 400,
    transformOrigin: "center",
  },
  title: {
    color: "#1188C1",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    fontFamily: "Montserrat, sans-serif",
    textTransform: "uppercase",
  },
});

export default memo(function NotFoundPage() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box className={classes.root}>
      <Box>
        {/* <NotFoundSvg className={classes.svg} /> */}
        <h1 id="error-404-message" className={classes.title}>
          {t("error.NotFound")}
        </h1>
      </Box>
    </Box>
  );
});
