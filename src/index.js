import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; //global stylesheet
import "./mobile.css"; // left sided navbar
import "./laptops.css"; //styling for laptop like devices (for screen width range 768px and 1024px)
import "./tablets.css"; //styling for laptop like devices (for screen width range 481px and 767px )
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
