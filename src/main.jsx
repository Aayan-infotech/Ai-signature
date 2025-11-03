import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { SignatureProvider } from "./context/SignatureContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SignatureProvider>
      <App />
    </SignatureProvider>
  </StrictMode>
);
