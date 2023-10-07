import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
// import reportWebVitals from "./reportWebVitals";
import App from "./App";
import i18n from "./core/i18n";
import process from "process";
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== "production") {
  localStorage.setItem("debug", "beatsmith:*");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>
);

// reportWebVitals();
