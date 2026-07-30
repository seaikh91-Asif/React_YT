import { useState } from 'react'
import './App.css'

function App() {
  
  const [title, setTitle] = useState(' ')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("form submitted!!!!!!!!!!!!!!!!!");
    
    setTitle('')
  }



  return (
    <>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} >
        <input type="text" 
        placeholder='enter your name'
        value={title} onChange={(e) => {
         setTitle(e.target.value);  
        }}
        />
        <button>submit</button>
      </form>
    </>
  )
}

export default App
