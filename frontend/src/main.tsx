import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";
import App from "./App";
import NewNote from "./components/NewNote";

const container = document.getElementById("root")!;

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/new" element={<NewNote />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
