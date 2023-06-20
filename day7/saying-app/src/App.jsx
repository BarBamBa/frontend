import { useState } from 'react'
import Saying from './components/Saying';
import './App.css'

function App() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState(new Date().getDate());
  const [day, setDay] = useState(new Date().getDay());

  let days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
  console.log(month, date, day);

  return (
    <div className="App">
      <Saying />
      <div>
        <p className='day' >{days[day]}</p>
        <p className="date">{month}/{date}</p>
      </div>
      <button className='btn' >더보기</button>
    </div>
  )
}

export default App
