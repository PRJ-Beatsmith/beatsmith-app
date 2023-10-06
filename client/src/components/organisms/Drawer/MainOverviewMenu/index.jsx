import React, { Fragment, useCallback } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Drawer } from "@mui/material";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useLocation, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";

const drawerHeight = 200;

const StyledListItem = withStyles(() => {
  return {
    root: {
      fontSize: 16,
      color: "#576883",
      "&:hover": {
        backgroundColor: "#E0F3FF",
      },
      padding: (props) => (props.sub ? "3px 16px" : "8px 16px"),
    },
    selected: {
      backgroundColor: "#008AD7 !important",
      color: "#FFF",
    },
  };
})(ListItem);

const StyledListItemText = withStyles(() => {
  return {
    primary: {
      fontSize: 16,
      color: (props) => (props.selected ? "#FFF" : "#576883"),
    },
    secondary: {
      fontSize: 12,
      color: (props) => (props.selected ? "#FFF" : "#576883"),
      margin: 0,
    },
  };
})(ListItemText);

const StyledListItemIcon = withStyles(() => {
  return {
    root: {
      color: (props) => (props.selected ? "#FFF" : "#576883"),
    },
  };
})(ListItemIcon);

const useStyles = makeStyles(() => ({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  drawer: {
    height: drawerHeight,
    backgroundColor: "#FFF",
    flexShrink: 0,
  },
  drawerPaper: {
    height: drawerHeight,
    backgroundColor: "#FFF",
    borderRight: "1px solid #e5e8ec",
    borderTop: "1px solid #e5e8ec",
  },
  menuItem: {
    color: "#576883",
  },
  active: {
    backgroundColor: "#0095CF",
    color: "#FFF",
    "&:hover": {
      backgroundColor: "#0095CF",
    },
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
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const history = useHistory();
  const [open, setOpen] = React.useState([false]);

  const handleClick = (event) => {
    let openArray = [...open];
    openArray[event.currentTarget.id] = !open[event.currentTarget.id];
    setOpen(openArray);
  };

  const gotoRoute = (path) => {
    history.push(path);
  };

  const hasRoute = useCallback((path) => pathname.includes(path), [pathname]);

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}>
      <List>
        {listOfRoutes(t).map((route, routeIndex) => {
          return route.children ? (
            <Fragment key={route.path}>
              <StyledListItem
                id={routeIndex}
                button
                selected={hasRoute(route.path)}
                onClick={handleClick}>
                <StyledListItemIcon selected={hasRoute(route.path)}>
                  {route.icon}
                </StyledListItemIcon>
                <StyledListItemText
                  selected={hasRoute(route.path)}
                  primary={route.displayValue}
                />
              </StyledListItem>
            </Fragment>
          ) : (
            <StyledListItem
              button
              key={routeIndex}
              selected={hasRoute(route.path)}
              onClick={() => gotoRoute(route.path)}>
              <StyledListItemIcon selected={hasRoute(route.path)}>
                {route.icon}
              </StyledListItemIcon>
              <StyledListItemText
                selected={hasRoute(route.path)}
                primary={route.displayValue}
              />
            </StyledListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default MainOverviewMenu;
