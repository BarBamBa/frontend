import React from 'react'

function Main(props) {
    let { darkmode } = props;

    return (
        <section className={darkmode ? 'darkmode' : ''}>Main</section>
    )
}

export default Main