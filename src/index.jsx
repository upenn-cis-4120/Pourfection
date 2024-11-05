import "../global.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { Iphone } from "./screens/Iphone";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Iphone />);
