import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import AppRouter from "./routes/AppRouter";

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <AppRouter />
      <ToastContainer />
    </Router>
  );
};

export default App;
