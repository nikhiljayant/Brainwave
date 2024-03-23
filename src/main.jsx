import React from "react";
import ReactDOM from "react-dom/client";
// COMPONENT
import App from "./App.jsx";
// CSS
import "./index.css";
// DEPENDENCY
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
