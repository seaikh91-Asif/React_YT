import { useState } from 'react'

import './App.css'

function App() {
  
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("form submitted!!!!!!!!!!!!!!!!!"); 
  }



  return (
    <>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} >
        <input type="text" placeholder='enter your name' />
        <button>submit</button>
      </form>
    </>
  )
}

export default App
