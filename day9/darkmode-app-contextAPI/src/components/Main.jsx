import React,{useContext} from 'react'
import { Context } from '../context';

function Main() {
    const { darkmode } = useContext(Context);

    return (
        <section className={darkmode ? 'darkmode' : ''}>Main</section>
    )
}

export default Main