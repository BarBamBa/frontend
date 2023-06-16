import { useState } from 'react'
import Calendar from './components/Calendar'
import { Button } from 'react-bootstrap';

import './App.css'

function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date().getDate());
  const [day, setDay] =useState(new Date().getDay());
  console.log(year,month,date);
  const Pre = () => {
      
    if (month > 0) {
      setMonth(month - 1);
      
    } else {
      setMonth(11);
      setYear(year - 1);
    }

  }

  const Next = () => {

    if (month < 11) {
      setMonth(month + 1);
    } else {
      setMonth(0);
      setYear(year + 1);
    }
  }

  return (
    <div>
      <h1 className='title'>옹진군 농협</h1>
      <Calendar year={year} month={month} date={date} day={day} />
      <Button onClick={Pre} variant="dark" className='btn'>Pre</Button>
      <Button onClick={Next} variant="dark" className='btn'>Next</Button>
    </div>
  )
}

export default App
