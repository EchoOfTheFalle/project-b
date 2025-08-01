import React from "react";
import ReactDOMClient from "react-dom/client";
import { CategoryDropdown } from "./screens/CategoryDropdown";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<CategoryDropdown />);
