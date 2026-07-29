import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState({user:'asif', age:18})

  const btnClicked = () => {
    const newNum = {...num}; 
    newNum.user = 'Sarthak'
    newNum.age = 20; 
    setNum(newNum)
  }

  return (
    <>
      <h1> {num.user}, {num.age} </h1>
      <button onClick={btnClicked} > click</button>
    </>
  )
}

export default App
