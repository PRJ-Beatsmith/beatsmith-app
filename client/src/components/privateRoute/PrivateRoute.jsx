/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  let isGranted = false;
  let { roles, policy } = rest;
  let { user } = auth;
  const [prevUrl] = useState(window.location.href);

  if (auth.isAuthenticated && (!roles || roles.includes(user.role))) {
    isGranted = true;
    if (policy && !policy({ userRole: user.role })) {
      isGranted = false;
    }
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isGranted ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { prevPath: prevUrl },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
