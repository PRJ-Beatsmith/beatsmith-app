import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularLoader from "../../components/shared/UI/CircularLoader";
import MainOverviewMenu from "../../components/organisms/Drawer/MainOverviewMenu";

const AboutOverviewPage = React.lazy(() =>
  import("../../Views/Overview/About")
);
const BenefitsOverviewPage = React.lazy(() =>
  import("../../Views/Overview/Benefits")
);
const PricingOverviewPage = React.lazy(() =>
  import("../../Views/Overview/Pricing")
);
const TeamOverviewPage = React.lazy(() => import("../../Views/Overview/Team"));

const drawerHeight = 200;

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  drawer: {
    height: drawerHeight,
    flexShrink: 0,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    // flexGrow: 1,
    marginTop: drawerHeight,
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
            {/* <Route
              exact
              path="/overview"
              render={(props) => <AboutOverviewPage {...props} />}
            /> */}
            <Route exact path="/overview/about" component={AboutOverviewPage} />
            <Route
              exact
              path="/overview/benefits"
              component={BenefitsOverviewPage}
            />
            <Route
              exact
              path="/overview/pricing"
              component={PricingOverviewPage}
            />
            <Route exact path="/overview/team" component={TeamOverviewPage} />
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
