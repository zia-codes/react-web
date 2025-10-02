// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
import Alert from "../components/Alert";
import About from "../components/About";
import Form from "../components/Form";

export default function App() {
  const [mode, setMode] = useState("dark");
  const [alertMsg, setAlertMsg] = useState("");

  // Show temporary alert
  const showAlert = (msg, timeout = 2000) => {
    setAlertMsg(msg);
    if (timeout > 0) {
      setTimeout(() => setAlertMsg(""), timeout);
    }
  };

  // Dark mode toggle
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1f2937";
      document.body.style.color = "white";
      showAlert("🌙 Dark mode has been enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("☀️ Light mode has been enabled");
    }
  };

  return (
    <Router>
      {/* Global alert always visible */}
      <Alert msg={alertMsg} />

      {/* Navbar always visible */}
      <Navbar2 mode={mode} toggleMode={toggleMode} />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Form showAlert={showAlert} mode={mode} />} />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </Router>
  );
}
