import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Toaster from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthUserContextProvider } from "./contexts/AuthUserContext.jsx";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_BASE_URL;
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthUserContextProvider>
      <Router>
        <App />
      </Router>
    </AuthUserContextProvider>
  </React.StrictMode>
);
