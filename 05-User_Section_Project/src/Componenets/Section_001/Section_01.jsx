import React from 'react'
import Navbar from './Navbar'
import Page_01_Contant from './Page_01_Contant'

const Section_01 = (props) => {
  return (
   
    <div>
      <Navbar/>
      <Page_01_Contant users = {props.users} />
    </div>
    
  )
}

export default Section_01