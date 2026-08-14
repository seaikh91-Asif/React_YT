import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between h-20 p-6  bg-[#5E3122] text-[#F7EAE0] font-bold'>
            <h2 className='text-3xl'>Navbar</h2>
            <div className='flex gap-10 text-2xl'>
                <Link to={'/'}>Home</Link>
                <Link to={'/contact'}> Contact</Link>
                <Link to={'/courses'}>Courses</Link>
                <Link to={'/product'}> Product</Link>
                <Link to={'/about'}>About</Link>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar