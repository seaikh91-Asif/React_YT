import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className=' bg-[#1D4533] text-[#F7EAE0] h-10 items-center text-2xl font-bold w-full flex justify-center gap-16 mt-6'>
            <Link to={'/product/men'}>Men </Link>
            <Link to={'/product/women'}>Women</Link>
        </div>
        {/* <h1>Product Page</h1> */}

        <Outlet/>
    </div> 
  )
}

export default Product