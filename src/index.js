import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// Fix for React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
