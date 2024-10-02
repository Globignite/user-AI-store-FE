import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Theme.js";
import { UserProvider } from "./RoutingsAndLayouts/UserContext.jsx";

// Get the root element
const container = document.getElementById("root");

// Create a root
const root = createRoot(container); // Use createRoot instead of ReactDOM.render

// Render the app
root.render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>
);
