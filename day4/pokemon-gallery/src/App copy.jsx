import { useState } from 'react'
import './App.css'

function App() {

  const [pokemon, setPokemon] = useState(0);


  const data = [
    {
      name: '이상해씨',
      type: '풀 , 독',
      imgUrl: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000101.png'
    },
    {
      name: '파이리',
      type: '불꽃',
      imgUrl: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000401.png'
    },
    {
      name: '피카츄',
      type: '전기',
      imgUrl: 'https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002501.png'
    },
  ]

  console.log(data[0].name);
  console.log(pokemon);
  return (
    <section>
      <h1>Pokemon Gallery</h1>
      <div className="gallery">
        <img src={data[pokemon].imgUrl} />
        <div className="info">
          <h2 className="name">{data[pokemon].name}</h2>
          <div className="type">{`타입: ${data[pokemon].type}`}</div>
        </div>
      </div>
      <div className='btnBox'>
        <button className='btn' onClick={() => { setPokemon(0) }}>이상해씨</button>
        <button className='btn' onClick={() => { setPokemon(1) }}>파이리</button>
        <button className='btn' onClick={() => { setPokemon(2) }}>피카츄</button>
      </div>
    </section>
  )
}

export default App
