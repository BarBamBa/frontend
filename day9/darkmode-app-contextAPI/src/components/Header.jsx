import React,{useContext} from 'react'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { Context } from '../context';

function Header() {
    const {darkmode, handleDarkmode} = useContext(Context);
    console.log(darkmode);
    return (
        <header>
            <h1 className={darkmode ? 'darkmode' : ''}>Header</h1>
            <button onClick={handleDarkmode}>
                {darkmode ? <MdOutlineDarkMode /> : <MdDarkMode />}
            </button>
        </header>

    )
}

export default Header