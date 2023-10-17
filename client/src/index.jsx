import ReactDOM from "react-dom";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import App from "./App";
import i18n from "./core/i18n";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
// eslint-disable-next-line no-undef
if (import.meta.env.NODE_ENV !== "production") {
  localStorage.setItem("debug", "beatsmith:*");
}

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);
