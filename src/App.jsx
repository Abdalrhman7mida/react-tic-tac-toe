import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import Button from './components/Button/Button'
import NavBar from './components/NavBar/NavBar';

import Home from './screens/HomeScreen';
import NotFoundScreen from './screens/NotFoundScreen';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tic-tac-toe" element={<Button />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
