import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CarSelector from "./components/DemoLopHoc/Hook/CarSelector";
import Timer from "./components/DemoLopHoc/Hook/Timer/Timer";
import UseEffectF8 from "./components/Testing/UseEffectF8";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<UseEffectF8 />);
