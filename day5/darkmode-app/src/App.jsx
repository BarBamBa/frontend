import { useState } from 'react'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { Button, Nav, Container, Navbar } from 'react-bootstrap';


import './App.css'

function App() {

  const [dark, setDark] = useState(false);

  return (

    <div className={dark ? "App darkmode" : "App whitemode"}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button
            variant="primary"
            onClick={() => { setDark(!dark) }}
          >{dark ? <MdOutlineDarkMode /> : <MdDarkMode />}
          </Button>
        </Container>
      </Navbar>

      <header>
        <h1>Dark mode App</h1>
      </header>

      <main>
        <h2>Dark mode is...</h2>
        <p>대통령은 국가의 원수이며, 외국에 대하여 국가를 대표한다. 대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를 요구할 수 없다. 헌법재판소 재판관은 정당에 가입하거나 정치에 관여할 수 없다.</p>
      </main>

    </div>
  )
}

export default App
