import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import Signup from "../pages/Signup/Register";
import Dashboard from "../pages/Dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
