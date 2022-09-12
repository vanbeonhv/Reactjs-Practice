import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FormikWithYup from "./components/DemoLopHoc/ReactForm/FormikWithYup";
import ContactForm from "./components/DemoLopHoc/ReactForm/ContactForm";
import LibraryManager from "./components/DemoLopHoc/ReactForm/LibraryManager";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<LibraryManager />);
