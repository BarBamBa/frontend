import './App.css'
import { name, sayName, myAdd, tag } from './myModule'

function App() {
    return (
        <>
            <h1>App</h1>
            <p>{name}</p>
            <p>{sayName('둘리')}</p>
            {tag}
            {myAdd(1,1)}
        </>
    )
}

export default App;