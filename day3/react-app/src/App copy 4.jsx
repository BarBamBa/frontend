import './App.css';
import { useState } from 'react';

function App() {
  // state 정의
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('black');

  const addCount = () => {
    setCount(count + 1);
    if (count == 4) {
      setColor('red');
    }
  }
  const subCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    if (count == 5) {
      setColor('black');
    }
  }

  const Tag = () => {
    if (count > 10) {
      return (
        <h1 style={{fontSize:'60px'}}>10초과!</h1>
      )
    }
  }

  console.log(count);

  return (
    <>
      <h1>Counter APP</h1>
      <p style={{ color: `${color}` }}>{count}</p>
      <button onClick={addCount}>COUNT++</button>
      <button onClick={subCount}>COUNT--</button>
      <Tag />
    </>
  )
}

export default App;