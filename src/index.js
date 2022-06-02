import React from "react";
import ReactDOM from "react-dom/client";
import "rsuite/dist/rsuite.min.css";
import "./style.css";
import App from "./App";
import { StoreProvier } from "./Store";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvier>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StoreProvier>
  </React.StrictMode>
);
