import { useState } from 'react'

import './App.css'
import Section_01 from './Componenets/Section_001/Section_01'
import Section_02 from './Componenets/Sectoin_02/Section_02'


function App() {
  
  const users = [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro:'', 
      tag:'satisfied'
    }, 
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro:'', 
      tag:'underserved'
    }, 
    {
      img:'https://plus.unsplash.com/premium_photo-1723579257409-8284efc80a73?q=80&w=920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro:'', 
      tag:'Underbanked'
    }
  ]

  return (
    <>
      <Section_01/>
       
      
    </>
  )
}

export default App
