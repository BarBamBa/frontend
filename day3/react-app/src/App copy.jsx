
import './App.css'
import Header from './components/Header'
import CSSModule from './components/CSSModule';

function App() {

  const name = '둘리';
  const userInfo = {
    name: '홍길동',
    age: 30,
  }

  // 클릭시 실행되는 함수
  const sayHello = () => {
    alert(`안녕 ${userInfo.name}이라고 해`);
  }

  // style 컴포넌트
  const style = {
    color: 'blule',
    backgroundColor: 'yellow',
    textDecoration: 'underline',
    border: '1px solid',
    padding: '10px',
  }

  const btnStyle = {
    backgroundColor: '#4CAF50', /* Green */
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline - block',
    fontSize: '16px',
    borderRadius: '10px'
  }

  return (
    <>
      <CSSModule />
      <Header />
      <h1 style={{ color: 'red', backgroundColor: 'pink' }}>App</h1>
      <p style={style}>content</p>
      <p>{name}</p>
      <p>이름은 {userInfo.name} 입니다. 나이는 {userInfo.age}입니다.</p>
      <button onClick={sayHello} style={btnStyle}>Button</button>
    </>
  )
}

export default App