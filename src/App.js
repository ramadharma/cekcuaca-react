/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Cek from './pages/Cek';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cek" element={<Cek />} />
      </Routes>
    </div>
  );
}

export default App;
