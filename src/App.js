import React from "react";
import Start from "./components/Start";
import HomePage from "./components/HomePage";
import LoginForm from "./components/Login";
import SignUpForm from "./components/Signup";
import ViewAll from "./components/viewall";
import UserProfile from "./components/Dashboard";
import CardComponent from "./components/Services";
import Adopt from "./components/Adopt";
import AnimalDetails from "./components/AnimalDetails";
import AdoptModel from "./components/AdoptModel";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/Home.css";
import"./styles/viewall.css";
import "./styles/dashboard.css";
import "./styles/Adopt.css";
import "./styles/AnimalDetails.css"
import "./styles/AdoptModel.css"
import "./styles/services.css"

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
        <Route path="/Adopt" element={<Adopt />} />
        <Route path="/adopt/:petId" element={<AnimalDetails />} />
        <Route path="/adopt-model/:petId" element={<AdoptModel />} />
        <Route path="/services" element={<CardComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
