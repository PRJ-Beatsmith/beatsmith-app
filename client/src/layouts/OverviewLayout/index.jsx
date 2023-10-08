import React, { Suspense } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularLoader from "../../components/shared/UI/CircularLoader";
import MainOverviewMenu from "../../components/organisms/Drawer/MainOverviewMenu";

const HomeOverviewPage = React.lazy(() => import("../../Views/Overview/Home"));

const AboutOverviewPage = React.lazy(() =>
  import("../../Views/Overview/About")
);
const FeaturesOverviewPage = React.lazy(() =>
  import("../../Views/Overview/Features")
);
const PricingOverviewPage = React.lazy(() =>
  import("../../Views/Overview/Pricing")
);
const TeamOverviewPage = React.lazy(() => import("../../Views/Overview/Team"));

const drawerHeight = 55;

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  drawer: {
    height: drawerHeight,
    // flexShrink: 0,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    minHeight: `calc(100vh - ${drawerHeight}px)`,
    width: "100%",
  },
}));

function OverviewLayout() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Box className={classes.drawer}>
        <MainOverviewMenu />
      </Box>
      <Box className={classes.content}>
        <Suspense fallback={<CircularLoader style={{ margin: "auto" }} />}>
          <Switch>
            <Route
              exact
              path="/overview"
              render={() => <Redirect to="/overview/home" />}
            />
            <Route path="/overview/home">
              <HomeOverviewPage />
            </Route>
            <Route exact path="/overview/about">
              <AboutOverviewPage />
            </Route>
            <Route exact path="/overview/features">
              <FeaturesOverviewPage />
            </Route>
            <Route exact path="/overview/pricing">
              <PricingOverviewPage />
            </Route>
            <Route exact path="/overview/team">
              <TeamOverviewPage />
            </Route>
            <Route
              path="/overview/*"
              component={() => <Redirect to="/error/404" />}
            />
          </Switch>
        </Suspense>
      </Box>
    </Box>
  );
}

export default OverviewLayout;
