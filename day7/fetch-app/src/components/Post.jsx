import { useState } from 'react'

function Post() {
    const [data, setData] = useState([])

    // 서버에서 데이터 불러오는 함수
    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setData(json.slice(0, 10));
                //setData(json);
                console.log(data);
            }
            )
    }

    return (
        <div>
            <div className='btnGroup'>
                <button onClick={fetchData} >Fetch Post</button>
            </div>
            <ul className='post-list' >
                {data ? data.map((item) => {
                    return (
                        <li key={item.id} >
                            <h3 className='title' >{item.id} : {item.title}</h3>
                            <p className='body' >{item.body}</p>
                        </li>
                    )
                }) : <li>데이터가 없습니다.</li>}
            </ul>
        </div>
    )
}

export default Post