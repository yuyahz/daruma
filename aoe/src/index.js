import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <script src="path/to/intersection-observer.js"></script>
    <script src="app.js"></script>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
