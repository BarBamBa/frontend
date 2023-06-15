import { useState } from 'react'
import './App.css'
import Modal from './Modal'

function App() {
  // true(열림),false(닫힘)
  // 초기값 설정
  const[modal,setModal] = new useState(false);
  
  return (
    <>
      <button onClick={()=>{setModal(true)}}>열기</button>
      {/* modal 참이면 표시 */}
      {modal ? <Modal setModal={setModal} /> : null}
    </>
  )
}

export default App