import { useState, useRef, useEffect } from 'react'


function Video(props) {
    return (
        <div className='content'>
            <video src='./media/video.mp4' ref={props.videoRef} ></video>
        </div>
    )
}

export default Video