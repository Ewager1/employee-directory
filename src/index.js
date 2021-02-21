import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "react-table/react-table.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
