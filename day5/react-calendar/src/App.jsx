import { useState } from 'react'
import Calendar from './components/Calendar'
import Header from './components/Header'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Calendar App</h1>
      <Header/>
      <Calendar/>
    </div>
  )
}

export default App
