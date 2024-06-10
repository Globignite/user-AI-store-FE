import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../Theme.js';

ReactDOM.render(
  <React.StrictMode>
         <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>

         </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
