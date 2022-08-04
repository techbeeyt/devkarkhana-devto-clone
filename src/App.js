import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Notifications from './components/Notifications/Notifications';
import All from './components/Notifications/All';
import Comments from './components/Notifications/Comments';
import Post from './components/Notifications/Post';

const App = () => {
  return (
    <>
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
      </Routes>
    </>
  );
};

export default App;