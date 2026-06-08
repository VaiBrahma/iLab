import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { Layout } from "./component/layout/layout.jsx";
import {
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import CoverPage from "./pages/coverpage/CoverPage.jsx";
import LabReport from "./component/labReport/LabReport.jsx";
import { data } from "./data.js";
import BodyChart from "./component/bodyChart/bodyChart.jsx";
import SmartInterpreter from "./component/smartInterpreter/SmartInterpreter.jsx";
import { Provider } from "react-redux";
import Forms from "./pages/Forms/Forms.jsx";
import {store} from "./store/store.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
