import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import { CssBaseline } from "@mui/material";
import CircularLoader from "@/components/shared/UI/CircularLoader";

const LoginPage = React.lazy(() => import("../../Views/Auth/Login"));

const useStyles = makeStyles(() => ({
  root: {
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    backgroundImage:
      "linear-gradient(180deg, rgba(120,39,230,0.3) 0%, rgba(137,35,135,0.3) 30%, rgba(233,64,87,0.3) 60%, rgba(242,114,33,0.3) 100%), url('/img/background/auth-background.jpg')",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  routeContainer: {
    zIndex: 10,
    width: "800px",
    height: "800px",
    backgroundColor: "#212226",
  },
}));

function AuthLayout() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Box className={classes.routeContainer}>
        <Suspense fallback={<CircularLoader style={{ margin: "auto" }} />}>
          <Switch>
            <Route
              exact
              path="/auth"
              render={() => <Redirect to="/auth/login" />}
            />
            <Route exact path="/auth/login">
              <LoginPage />
            </Route>
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
    </Box>
  );
}

export default AuthLayout;
