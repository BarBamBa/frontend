import { useState } from 'react'

import './App.css'

function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState([]);

  const fetchWeather = () => {
    const apiKey = 'fb5f98c3085239f4940351a66eba9b2d'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${apiKey}`

    fetch(url)
      .then((res) => res.json())
      .then(json => {
        console.log(json);
      })
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <button onClick={fetchWeather} ></button>
    </div>
  )
}

export default App
