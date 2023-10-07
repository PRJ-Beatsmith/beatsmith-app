import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";

const useStyles = makeStyles(() => ({
  header: {
    minWidth: "100vw",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "1em",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5em",
    padding: "10px",
  },
}));

const listOfRoutes = (t) => {
  return [
    {
      path: "/overview/about",
      displayValue: t("Overview.mainMenu.About"),
      icon: <InfoIcon />,
    },
    {
      path: "/overview/benefits",
      displayValue: t("Overview.mainMenu.Benefits"),
      icon: <StarIcon />,
    },
    {
      path: "/overview/pricing",
      displayValue: t("Overview.mainMenu.Pricing"),
      icon: <AttachMoneyIcon />,
    },
    {
      path: "/overview/team",
      displayValue: t("Overview.mainMenu.Team"),
      icon: <GroupIcon />,
    },
  ];
};

const MainOverviewMenu = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar className={classes.header}>
        {listOfRoutes(t).map((route, index) => (
          <Button
            color="inherit"
            component={Link}
            to={route.path}
            key={index}
            className={classes.button}>
            {route.icon}
            {route.displayValue}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default MainOverviewMenu;
