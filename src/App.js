import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;