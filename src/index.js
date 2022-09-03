import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cal from "./components/Cal/Cal";
import ToDoList2 from "./components/ToDoApp2/ToDoList2";
import ToDoList3 from "./components/ToDoApp2/ToDoList3";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ToDoList3 />);
