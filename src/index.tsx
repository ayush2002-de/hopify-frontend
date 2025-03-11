import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import HospitalPage from "./pages/Hospitals";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/hospitals" element={<HospitalPage />} />
          <Route path="/treatments" element={<HospitalPage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
