/* eslint-disable no-unused-vars */
import React, { Fragment, Suspense } from "react";

import { Switch, Redirect } from "react-router-dom";
import LoaderWithBackdrop from "./components/shared/UI/LoaderWithBackdrop";

const PrivateRoute = React.lazy(() =>
  import("./components/privateRoute/PrivateRoute")
);

// layouts:

const AppLayout = React.lazy(() => import("./layouts/AppLayout"));

const BackofficeLayout = React.lazy(() => import("./layouts/BackofficeLayout"));

/**
 *
 * @param {*} props
 * Do all the Routes related implementation in this component
 */

const V2PrivateRoutes = (props) => {
  let allowedRoutes = null;

  allowedRoutes = (
    <Fragment>
      <Suspense fallback={<LoaderWithBackdrop style={{ margin: "auto" }} />}>
        <Switch>
          <PrivateRoute path="/app" component={AppLayout} />
          <PrivateRoute path="/backoffice" component={BackofficeLayout} />
          <PrivateRoute path="/" component={() => <Redirect to="/error" />} />
        </Switch>
      </Suspense>
    </Fragment>
  );

  return allowedRoutes;
};

export default V2PrivateRoutes;
