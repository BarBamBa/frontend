import { useState, useRef, useEffect } from 'react'

function TimeInfo(props) {
    let currentTime = Math.round(props.currentTime);
    let duration = Math.round(props.duration);

    console.log(props);
    console.log(currentTime, duration)

  return (
    <div className='timeInfo' >
        <p>{currentTime} / {duration}</p>
        <progress min='0' max='100' value={duration ? (currentTime * 100)/duration : 0} ></progress>
        <p>ff</p>
    </div>
  )
}

export default TimeInfo