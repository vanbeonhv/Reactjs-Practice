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
import StudentManager from "./components/StudentManager/StudentManager";
import Selector from "./components/EffectDemo/Selector";
import TestClass from "./components/EffectDemo/TestClass";
import MyClock from "./components/HookPractice/MyClock";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<MyClock />);
