import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";
import App from "./App.jsx";
import "./index.css";
import refresh from "./store/refresh.js";

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "http:",
  refresh: refresh,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider store={store}>
      <App />
    </AuthProvider>
  </StrictMode>
);
