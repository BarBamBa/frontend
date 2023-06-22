import { useState } from 'react'
import Page from './components/Page'
import './App.css'

function App() {

  const [darkmode, setDarkmode] = useState(false);
  const handleDarkmode = () => {
    setDarkmode(!darkmode);
  }

  return (
    <>
      <Page
        darkmode={darkmode}
        handleDarkmode={handleDarkmode}
      />
    </>
  )
}

export default App
