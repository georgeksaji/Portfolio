import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import your main CSS files
import "./assets/css/base.css";
import "./assets/css/main.css";
import "./assets/css/vendor.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
