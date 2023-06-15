import './App.css'
import ColorButton from './components/ColorButton'
import Foods from './components/Foods'
import HateList from './components/HateList'

function App() {

  return (
    <>
      <h1>App</h1>
      <ColorButton bg_color = 'red' color='white'>장바구니</ColorButton>
      <ColorButton bg_color = 'green' color='black'>구매하기</ColorButton>
      <ColorButton bg_color = 'yellow' color='grey'>문의하기</ColorButton>

      <Foods>
        <li>김밥</li>
        <li>만두</li>
        <li>순대</li>
      </Foods>

      <br/>
      
      <HateList>
        <li>곽경남</li>
        <li>김정은</li>
        <li>푸틴</li>
      </HateList>
    </>
  )
}

export default App