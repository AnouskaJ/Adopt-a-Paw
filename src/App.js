
import React from "react";
import Start from "./components/Start";
import HomePage from "./components/HomePage";
import LoginForm from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/Home.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/other" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

