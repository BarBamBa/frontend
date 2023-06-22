import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import './App.css'

function App() {
  const [data, setData] = useState('');

  const fetchData = () => {
    const url = "https://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?serviceKey=h4CigV6Sw5QDNXdxrA9F7yqbg7Ewg3GQ4Y%2FQiTcr9byi2fLtlHp%2FdGIOauCtexbfO17Preo19HpSiBESJzGuRg%3D%3D&returnType=json&numOfRows=10&pageNo=1&year=2023";
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json.response.body);
        console.log(json);
        console.log(data);

      })
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
