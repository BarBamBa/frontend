import React from 'react'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

function Header(props) {
    let { darkmode, handleDarkmode } = props;
    console.log(darkmode);
    return (
        <header>
            <h1 className={
                darkmode ? 'darkmode' : ''
            }>Header</h1>
            <button onClick={handleDarkmode}>

                {darkmode ?
                    <MdOutlineDarkMode />
                    : <MdDarkMode />
                }
            </button>
        </header>

    )
}

export default Header