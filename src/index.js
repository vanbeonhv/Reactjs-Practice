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
import LoginForm from "./components/LoginForm";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<LoginForm />);