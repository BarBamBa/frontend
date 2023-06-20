import { useState } from 'react'

function Photo() {
  const [data, setData] = useState([])

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json.slice(0, 10));
        console.log(data);
      }
      )
  }

  return (
    <div>
      <div className='btnGroup'>
        <button onClick={fetchData} >Fetch Photo</button>
      </div>

      <ul className='post-list' >
        {data ? data.map((item) => {
          return (
            <li key={item.id} >
              <h3 className='title' >{item.id} : {item.title}</h3>
              <img src={item.thumbnailUrl} />
            </li>
          )
        }) : '데이터가없습니다.'}
      </ul>
    </div>
  )
}

export default Photo