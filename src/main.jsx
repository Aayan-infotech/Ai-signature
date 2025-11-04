import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { SignatureProvider } from "./context/SignatureContext.jsx";
import theme from "./component/theme.jsx";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignatureProvider>
        <App />
      </SignatureProvider>
    </ThemeProvider>
    ,
  </StrictMode>
);
