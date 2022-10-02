import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginCore from "./LoginCore";
import HomeCore from "./HomeCore";
import EmployeeCore from "./EmployeeCore";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginCore />} />
        <Route path="/home" element={<HomeCore />} />
        <Route path="/employee/:pid" element={<EmployeeCore />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
