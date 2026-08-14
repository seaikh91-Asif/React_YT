import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
    let navigate = useNavigate()
  return (
    <div className='flex justify-center'>
        <button 
        onClick={() => {
            navigate('/')
        }} 
        className='font-semibold bg-amber-200 rounded p-2 ml-11  mt-11 active:scale-95 cursor-pointer'>
            Home
        </button>

        <button 
        onClick={() => {
            navigate(-1)
        }} 
        className='bg-amber-200 rounded p-2 ml-11  mt-11 active:scale-95 cursor-pointer'>
            Back
        </button>
        
        
    </div>
  )
}

export default Navigation