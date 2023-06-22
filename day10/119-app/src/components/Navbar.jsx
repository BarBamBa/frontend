import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DiReact } from 'react-icons/di'
function Navbar() {
    let navi = useNavigate();
    return (
        <div className="navbar">
            <div className="logo">
                <DiReact className='logo' />
            </div>
            <div className="navbar-menu">
                <li onClick={() => { navi('/') }} >Home</li>
                <li onClick={() => { navi('/detail') }}>Detail</li>
            </div>
        </div>
    )
}

export default Navbar