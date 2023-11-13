// AppRouter.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Application from "../components/Application";
import ProtectedRoute from "./PrivateRoute";
import { ProtectedRouteProps } from "./PrivateRoute";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<ProtectedRoute outlet={<Application />} />} />
      <Route path="/*" element={<Navigate to="/signin" replace />} />
    </Routes>
  );
};

export default AppRouter;
