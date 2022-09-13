import React from "react";
// import ReactDOM from "react-dom/client";
import "./index.css";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LibraryManager2 from "./components/DemoLopHoc/ReactForm/LibraryManager2";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<LibraryManager2 />);
