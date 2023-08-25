import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <div className="bg-mainGreyishBlue p-6 h-screen w-screen grid grid-cols-5">
    <App />
  </div>
  // </React.StrictMode>
);
