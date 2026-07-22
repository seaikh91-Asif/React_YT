import { useState } from 'react'
import './App.css'
import Card from './Componentss/Card'

function App() {
  

  return (
    <>
     <Card user = 'mr X' age = {99} paragraph = 'this is the first div paragraph '/>
     <Card user = 'Asif' age = {18} paragraph =  'this is the second div paragraph' />
    </>
  )
}

export default App
