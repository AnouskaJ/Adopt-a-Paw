import React from "react";
import Start from "./components/Start";
import HomePage from "./components/HomePage";
import LoginForm from "./components/Login";
import SignUpForm from "./components/Signup";
import ViewAll from "./components/viewall";
import UserProfile from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/Home.css";
import"./styles/viewall.css";
import "./styles/dashboard.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/other" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/backtologin" element={<LoginForm />} />
        <Route path="/dashboard" element={<UserProfile />} />
        <Route path="/viewall" element={<ViewAll/>}/>
      </Routes>
    </Router>
  );
}

export default App;
