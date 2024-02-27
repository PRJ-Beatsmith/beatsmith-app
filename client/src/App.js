import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import history from "./utils/history";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./AppRoutes";
import { CssBaseline } from "@mui/material";
import "./App.scss";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AuthProvider } from "utils/contexts/authContexts";

function App() {
  return (
    <Fragment>
      <DndProvider backend={HTML5Backend}>
        <ToastContainer />
        <AuthProvider>
          <Router history={history}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="App" id="App">
                <AppRoutes />
              </div>
            </ThemeProvider>
          </Router>
        </AuthProvider>
      </DndProvider>
    </Fragment>
  );
}

export default App;
