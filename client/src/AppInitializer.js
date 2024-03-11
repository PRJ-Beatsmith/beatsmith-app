// import jwt_decode from "jwt-decode";
import { store } from "./store";
import "./core/i18n/i18n";
import { setApplicationTouched } from "actions/uiActions";
import moment from "moment";
import "moment/locale/de";
import { oidcEnabled } from "actions/ssoActions";
// import { Logger } from "core/Logger";

export const setApplicationLanguage = () => {
  document &&
    document.documentElement &&
    document.documentElement.setAttribute("lang", navigator.language);
  moment.locale(navigator.language);
};

export const isOidcEnabled = () => {
  store.dispatch(oidcEnabled());
};

// export const checkUserAuthentication = () => {
//   // Check for token to keep user logged in
//   let tempToken = localStorage.getItem(`${process.env.PUBLIC_URL}jwtToken`);

//   if (tempToken && !window.location.href.includes("web-client-v2/queue")) {
//     // Set auth token header auth
//     const token = tempToken; //localStorage.jwtToken;
//     setAuthToken(token);
//     // Decode token and get user info and exp
//     const decoded = jwt_decode(token);
//     // Set user and isAuthenticated
//     store.dispatch(setCurrentUser(decoded));
//     // Setup Application level socket
//     store.dispatch(connectAppSocket({ token, userId: decoded }));
//     // Check for expired token

//     store.dispatch(setInCallUserType("User"));
//     store.dispatch(setInCallUserId(decoded.id));
//     store.dispatch(getUserPersonalDetails());
//     const currentTime = Date.now() / 1000; // to get in milliseconds
//     if (decoded.exp < currentTime) {
//       // Logout user
//       store.dispatch(logoutUser());

//       // Redirect to login
//       window.location.href = "./";
//     }
//   } else {
//     // Setup Application level socket
//     store.dispatch(setInCallUserType("Guest"));
//     store.dispatch(connectAppSocket({ connectionType: "client" }));
//   }
//   store.dispatch(getAllPolicy());
// };

export const trapApplicationTouched = () => {
  document.body.addEventListener("click", () =>
    store.dispatch(setApplicationTouched()),
  );
};
