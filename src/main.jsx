import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-mainGreyishBlue p-6 min-h-screen min-w-screen ">
      <App />
    </div>
  </React.StrictMode>
);
