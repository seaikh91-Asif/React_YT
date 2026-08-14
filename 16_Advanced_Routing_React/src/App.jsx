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
import Kids from './Pages/Kids'
import Courses from './Pages/Courses'
import CoursesDetails from './Pages/CoursesDetails'
import About from './Pages/About'
import Navigation from './Components/Navigation'


const App = () => {
  return (
    <div >
      <Navbar/>
      <Navigation/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>} />
          <Route path='kids' element={<Kids/>} />
         
        </Route>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<CoursesDetails/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        

        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App