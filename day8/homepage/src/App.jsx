import { useState } from 'react'
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import './App.css'
import About from './components/About';
import Home from './components/Home';

function App() {

  let navigate = useNavigate();
  
  return (
    <>
      <div className='Navbar'>       
          <div onClick={() => { navigate('/') }} className='Nav-btn' >Home</div>
          <div onClick={() => { navigate('/about') }} className='Nav-btn'>About</div> 
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </>
  )
}

export default App
