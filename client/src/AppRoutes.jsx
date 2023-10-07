/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { Fragment, useEffect, Suspense } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import LoaderWithBackdrop from "./components/shared/UI/LoaderWithBackdrop";

const V2PrivateRoutes = React.lazy(() => import("./V2PrivateRoutes"));

// layouts:

const ErrorPageLayout = React.lazy(() => import("./layouts/ErrorPageLayout"));

const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

const OverviewLayout = React.lazy(() => import("./layouts/OverviewLayout"));

const StorybookRoute = () => {
  useEffect(() => {
    window.location.href = "http://localhost:6006/";
  }, []);

  return null;
};

const isDevelop = process.env.NODE_ENV === "development";

/**
 *
 * @param {*} props
 * Do all the Routes related implementation in this component
 */

const appRoutes = (props) => {
  let allowedRoutes = null;

  allowedRoutes = (
    <Fragment>
      <Suspense fallback={<LoaderWithBackdrop style={{ margin: "auto" }} />}>
        <Switch>
          {isDevelop && (
            <Route path="/storybook">
              <StorybookRoute />
            </Route>
          )}
          <Route path="/error" component={ErrorPageLayout} />
          <Route path="/auth" component={AuthLayout} />
          <Route exact path="/overview" component={OverviewLayout} />
          {/* <Route path="/" component={V2PrivateRoutes} /> */}
          <Route path="/" component={() => <Redirect to="/overview" />} />
        </Switch>
        {/* <Route exact path="/" render={(props) => <Login {...props} />} /> */}
      </Suspense>
    </Fragment>
  );
  return allowedRoutes;
};

export default appRoutes;
