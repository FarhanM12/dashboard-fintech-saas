// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import App from "./App";
import { msalConfig } from "./config/authConfig";

// 1) Create MSAL instance
const msalInstance = new PublicClientApplication(msalConfig);

// 2) Process redirect response before rendering
msalInstance
  .handleRedirectPromise()
  .then((response) => {
    console.log("MSAL redirect response:", response);
  })
  .catch((error) => {
    console.error("MSAL redirect error:", error);
  });

// 3) Render your app with <MsalProvider>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);
