import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/:username" element={<Profile />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
