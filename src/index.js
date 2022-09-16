import React from "react";
// import ReactDOM from "react-dom/client";
import "./index.css";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LandingPage from "./components/DemoLopHoc/Router/LoginPage/LandingPage";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<LandingPage />);
