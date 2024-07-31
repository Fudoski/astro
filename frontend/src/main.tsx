import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const domNode = document.getElementById("root");
const root = createRoot(domNode!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
