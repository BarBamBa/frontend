import React from 'react'
import bg from '../../public/images/000701.png'

function Pokemons() {
    return (
        <div style={{backgroundImage: `url(${bg})`}} className="container">
            <h1>Pokemons</h1>
            <div className="pokemon-list">
                <div className="item">
                    <img src="./images/000101.png" alt="이상해씨" />
                </div>
                <div className="item">
                    <img src="./images/000401.png" alt="파이리" />
                </div>
                <div className="item">
                    <img src="./images/000701.png" alt="꼬부기뷁" />
                </div>            
            </div>
        </div>
    )
}

export default Pokemons