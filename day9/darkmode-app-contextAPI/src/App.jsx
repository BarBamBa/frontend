import { useState, useContext } from 'react'
import Page from './components/Page'
import { Context } from './context';
import './App.css'

function App() {

  const [darkmode, setDarkmode] = useState(false);
  const handleDarkmode = () => {
    setDarkmode(!darkmode);
  }

  return (
    <>
      <Context.Provider value={{darkmode, handleDarkmode}}>
        <Page />
      </Context.Provider>

    </>
  )
}

export default App
