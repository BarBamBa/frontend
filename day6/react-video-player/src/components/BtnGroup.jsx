import { useState, useRef, useEffect } from 'react'

function BtnGroup(props) {
    console.log(props);
  return (
    <div className='control' >
        <button onClick={props.playVid} >play</button>
        <button onClick={props.pauseVid} >pause</button>
        <button onClick={props.stopVid} >stop</button>
    </div>
  )
}

export default BtnGroup