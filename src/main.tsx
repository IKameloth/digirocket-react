import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth-context.tsx";
import CombinedToastProvider from "./Providers/ToastProvider.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CombinedToastProvider>
          <App />
        </CombinedToastProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
