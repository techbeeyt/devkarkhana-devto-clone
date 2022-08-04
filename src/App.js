import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Notifications from './components/Notifications/Notifications';
import All from './components/Notifications/All';
import Comments from './components/Notifications/Comments';
import Post from './components/Notifications/Post';
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import SearchPage from "./components/SearchPage/SearchPage";
import Readinglist from './components/ReadingList/Readinglist';
import CreatePost from "./components/CreatePost/CreatePost";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notifications" element={<Notifications />}>
          <Route index element={ <All/>} />
          <Route path='all' element={ <All/>} />
          <Route path='comments' element={ <Comments/>} />
          <Route path='posts' element={ <Post/>} />
        </Route>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/create-new-post" element={<CreatePost />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/readinglist" element={<Readinglist />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
