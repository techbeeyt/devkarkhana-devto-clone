import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import SearchPage from "./components/SearchPage/SearchPage";
import Readinglist from './components/ReadingList/Readinglist';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/readinglist" element={<Readinglist />} />
      </Routes>
    </>
  );
};

export default App;
