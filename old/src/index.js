import "../global.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
//import { Screen1 } from "./screens/Screen1"; //top
import { Screen2 } from "./screens/Screen2"; //same as 3
/*import { Screen4 } from "./screens/Screen4"; //good
import { Screen5 } from "./screens/Screen5"; //good
import { Screen6 } from "./screens/Screen6";
import { Screen7 } from "./screens/Screen7"; //good
import { Screen8 } from "./screens/Screen8"; //good
*/
const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Screen2 />);
