import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Grid from './components/Grid';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/grid/:id' element={<Grid/>} />
    </Routes>
    </>
  )
}

export default App
