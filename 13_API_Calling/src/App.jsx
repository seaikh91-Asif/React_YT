import axios from 'axios'
import { useState } from 'react'


function App() {

  /*
  NOTE: this code is for fetch api in react(how you can call api using fetch methode)
  */ 
  const getFetck = async  () => {
    const response = await fetch('https://picsum.photos/200/300/?blur')
    console.log(response); 
  }

  
  /*
  NOTE: this code is for axios api in react(how you can call api using axios methode)
  */
  const getAxios = async () => {
    const response = await axios.get('https://picsum.photos/200/300/?blur')
    console.log(response)
  }

  
 

  return (
    <>
      <button onClick={getData} >get data</button> 
    </>
  )
}

export default App
