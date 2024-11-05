import "../global.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { Screen1 } from "./screens/Screen1";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Screen1 />);
