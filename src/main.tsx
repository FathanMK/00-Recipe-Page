import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./styles/globals.css";
import "./styles/colors.css";
import "./styles/fonts.css";
import "modern-normalize/modern-normalize.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
