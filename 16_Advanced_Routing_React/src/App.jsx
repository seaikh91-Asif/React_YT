import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import { Routes, Route } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import Men from './Pages/Men'
import Women from './Pages/Women'


const App = () => {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>} />
         
        </Route>
        <Route path='/contact' element={<Contact/>} />
        

        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App