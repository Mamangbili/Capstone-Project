import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Biodata from "./pages/Biodata"
import Dahsboard from "./pages/dashboard";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Dahsboard/>
  </React.StrictMode>
);
