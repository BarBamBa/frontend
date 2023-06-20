import { useState } from 'react'
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Photo from './components/Photo'
import Post from './components/Post'
import Weather from './components/Weather';

import './App.css'

function App() {
  const [data, setData] = useState([])
  let navigate = useNavigate();

  return (
    <div className='App'>
      <h1>Fetch App</h1>
      <div className='btnGroup'>
        <button onClick={() => { navigate('/post') }} >Post Fetch Page</button>
        <button onClick={() => { navigate('/photo') }} >Photo Fetch Page</button>
      </div>


      <Routes>
        <Route path='/' element={<h1>Fetch App</h1>} />
        <Route path='/post' element={<Post />} />
        <Route path='/photo' element={<Photo />} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
    </div>
  )
}

export default App
