import { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ColorModeContext, useMode } from "./core/theme";
import history from "./utils/history";
import AppRoutes from "./AppRoutes";
import { CONTEXT_PATH } from "./utils/constant";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.scss";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ToastContainer } from "react-toastify";

function App() {
  const [theme, toggleColorMode] = useMode();

  return (
    <ColorModeContext.Provider value={toggleColorMode}>
      <Fragment>
        <DndProvider backend={HTML5Backend}>
          <ToastContainer />
          <Router basename={CONTEXT_PATH} history={history}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="App" id="App">
                <AppRoutes />
              </div>
            </ThemeProvider>
          </Router>
        </DndProvider>
      </Fragment>
    </ColorModeContext.Provider>
  );
}

export default App;
