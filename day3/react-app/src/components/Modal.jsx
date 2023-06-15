import '../App.css'
import React from 'react'

function Modal(props) {
    console.log(props);
    const setModal = props.setModal;
  return (
    <div className='modal'>
        <div className='modal_content"'>
        <div>Modal</div>
        <p>모달창입니다.</p> 
        <button onClick={()=>{setModal(false)}}>닫기</button>
        </div>
    </div>
    
  )
}
export default Modal;