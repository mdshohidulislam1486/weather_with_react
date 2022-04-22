import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Weather from './Weather';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/home" element={<Home/>} />
       <Route path="/weather/:id" element={<Weather/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
