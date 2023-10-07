import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularLoader from "../../components/shared/UI/CircularLoader";

const NotAuthorizedPage = React.lazy(() =>
  import("@/assets/static/NotAuthorized")
);
const ForbiddenPage = React.lazy(() => import("@/assets/static/Forbidden"));
const NotFoundPage = React.lazy(() => import("@/assets/static/NotFound"));

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    maxHeight: "100vh",
    overflow: "hidden",
  },
}));

function ErrorPageLayout() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Box className={classes.content}>
        <Suspense fallback={<CircularLoader style={{ margin: "auto" }} />}>
          <Switch>
            <Route exact path="/error/401">
              <NotAuthorizedPage />
            </Route>
            <Route exact path="/error/403">
              <ForbiddenPage />
            </Route>
            <Route exact path="/error/404">
              <NotFoundPage />
            </Route>
          </Switch>
        </Suspense>
      </Box>
    </Box>
  );
}

export default ErrorPageLayout;
