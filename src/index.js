import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import StudentList from "./components/StudentList";
import ProfileCard from "./components/ProfileCard";
import BmiCalculator from "./components/BmiCalculator";
import Calculator from "./components/Calculator";
import App2 from "./components/PracticeUnmount/App2";
import App3 from "./components/UserLogin/App3";
import { Collapse } from "bootstrap";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Collapse />);
