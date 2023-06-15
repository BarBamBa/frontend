import './App.css'
import { useState } from 'react';


function App() {
  //열림 true
  const [modal, setModal] = useState(false);

  const foods = ['김밥', '만두', '순대'];

  console.log(modal);

  const Food = () => {
    return (
      foods.map(function (item) {
        return <p>{item}</p>
      })
    )

  }
  const Modal = () => {
    return (
      <div className="modal">
        <h2>모달창</h2>
        <Food />
        <button className="btn" onClick={() => { setModal(false); }}>닫기</button>
      </div>
    )
  }

  return (
    <>
      <h1>App</h1>
      {modal ? (<Modal />) : null}
      <button onClick={() => { setModal(true); }}>모달창 열기</button>

    </>
  )
}

export default App