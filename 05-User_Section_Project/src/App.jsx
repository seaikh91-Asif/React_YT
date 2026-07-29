import { useState } from 'react'
import './App.css'
import Section_01 from './Componenets/Section_001/Section_01'

function App() {
  // Single array of objects
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: 'Empowering individuals who are fully supported and confident in their financial journey.',
      tag: 'satisfied',
      color: '#e2e8f0'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: 'Bridging the gap for hardworking professionals who lack tailored financial resources.',
      tag: 'underserved',
      color: '#fef3c7'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1723579257409-8284efc80a73?q=80&w=920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Unlocking accessible banking solutions for communities with limited traditional financial access.',
      tag: 'Underbanked',
      color: '#dcfce7'
    }
  ]

  return (
    <>
      <Section_01 users={users} />
    </>
  )
}

export default App