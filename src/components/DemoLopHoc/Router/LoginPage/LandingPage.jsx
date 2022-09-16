import React from "react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";

const LandingPage = () => {
  return (
    <div>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </div>
  );
};

export default LandingPage;
