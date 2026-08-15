import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'

function App() {



let [theme, setTheme] = useState('dark')

  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar theme = {theme} setTheme={setTheme} />
    </div>
  )
}

export default App
