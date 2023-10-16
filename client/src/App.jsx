import { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { CONTEXT_PATH } from "./utils/constant";
import "./App.scss";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Fragment>
      <DndProvider backend={HTML5Backend}>
        <ToastContainer />
        <Router basename={CONTEXT_PATH}>
          <div className="App" id="App">
            <AppRoutes />
          </div>
        </Router>
      </DndProvider>
    </Fragment>
  );
}

export default App;
