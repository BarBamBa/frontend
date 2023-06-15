import React from 'react'

function ColorButton(props) {
    console.log(props);
    const {bg_color,children,color} = props;
    const style = {
        backgroundColor: bg_color,
        width: '130px',
        padding: '15px',
        margin: '20px 10px',
        border: 'none',
        borderRadius: '10px',
        color: color,
        cursor: 'pointer'
    }
    console.log(color);
    return (
        <button style={style}>{children}</button>
    )
}

export default ColorButton