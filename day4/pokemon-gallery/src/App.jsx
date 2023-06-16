import { useState } from 'react'
import './App.css'

function App() {

  const [post, setPost] = useState([
    { name: '홍길동', title: '첫번째 글', like: 0 },
    { name: '둘리', title: '두번째 글', like: 0 },
    { name: '김삿갓', title: '세번째 글', like: 0 },
    { name: '홍길동', title: '네번째 글', like: 0 }
  ]);
  
  const addLike = (e, item) => {
    console.log(e, item);
    let copy = [...post]
    console.log(copy);
    copy[e].like += 1;
    setPost(copy);
  }

  // const addLike = (e) => {
  //   console.log(e.target.name);
  //   let copy = [...post]
  //   console.log(copy);
  //   copy[e.target.name].like += 1;
  //   setPost(copy);
  // }

  return (
    <>
      <h1>App</h1>
      {
        post.map((item, i) => {
          return (
            <div key={i}>
              {/* index를 함수에 감싸 파라메터로 전달하는 방식 */}
              <p>{item.title}
                <a onClick={() => addLike(i, item)}>👍</a>
                <span>{item.like}</span>
              </p>

              {/* name을 index로 설정해 target으로 전달하는 방식 */}
              {/* <p>{item.title}
                <a name={i} onClick={addLike}>👍</a>
                <span>{item.like}</span>
              </p> */}

            </div>

          )
        })}
    </>
  )

}

export default App
