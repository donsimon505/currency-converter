import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<Homepage />} />
        <Route path="/login" element={<Homepage />} />
        <Route path="/dashboard" element={<Homepage />} />
        <Route path="/favorites" element={<Homepage />} />
        <Route path="/settings" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
