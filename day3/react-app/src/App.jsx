import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  console.log('App 시작');
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('#ccc');

  const addCount = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    //앱이 시작되면 실행
    //count State가 업데이트되면 실행
    console.log(`useEffect Update count :  ${count}`);
  }, [count]);

  const changeColor = (e) => {
    console.log(e.target);
    setColor(e.target.name)
  }

  return (
    <>
      <h1>App</h1>
      <p>{count}</p>
      <button onClick={addCount}>button</button>
      <h1>Color App</h1>
      <div className='box' style={{background:color}}></div>
      <button name='red' onClick={changeColor}>red</button>
      <button name='green' onClick={changeColor}>green</button>
      <button name='blue' onClick={changeColor}>blue</button>
    </>
  )
}

export default App