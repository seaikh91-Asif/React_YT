import { useState } from 'react'
import './App.css'

function App() {
  function inputChanging (val) {
    console.log(val);
    
  }
 

  return (
    <>
      <div>
          <input type="text"
          placeholder='Enter text'
          onChange={function (elem) {
            inputChanging(elem.target.value)
          }}
          />
      </div>
    </> 
  )
}

export default App
