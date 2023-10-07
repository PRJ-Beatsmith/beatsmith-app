import React, { Suspense } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularLoader from "@/components/shared/UI/CircularLoader";

const useStyles = makeStyles(() => ({
  root: {
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
  },
}));

function AuthLayout() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Suspense fallback={<CircularLoader style={{ margin: "auto" }} />}>
        <Switch>
          <Route
            exact
            path="/auth"
            render={() => <Redirect to="/auth/login" />}
          />
          <Route exact path="/auth/login"></Route>
          <Route exact path="/auth/register"></Route>
          <Route exact path="/auth/forgot-password"></Route>
          <Route exact path="/auth/delete-account"></Route>
          <Route
            path="/auth/*"
            component={() => <Redirect to="/error/404" />}
          />
        </Switch>
      </Suspense>
    </Box>
  );
}

export default AuthLayout;
