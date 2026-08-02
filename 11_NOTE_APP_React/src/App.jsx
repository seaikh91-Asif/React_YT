import { useState } from 'react'

function App() {

  return (
    <>
    
      <div className='bg-[#151515] min-h-screen w-full text-white  flex justify-center items-center p-7  '>
          
        <div className='p-7 bg-[#252525] h-210 w-150 rounded-4xl'>
          <h1 className='text-center m-5 text-5xl font-bold text-white'>NOTES APP</h1>
          
          <form className='flex flex-col gap-2 '>
            <div className='border-2 border-[#333333] rounded-lg flex flex-col h-95 w-full'>

              <input type="text" 
              placeholder='Title' 
              className=' bg-[#3a3a3a] m-5 p-8 h-3.5 w-[92%] border-2 border-[#555555] rounded-lg box-border ' />

              <textarea type="text"
              placeholder='Enter Description...' 
              className='bg-[#3a3a3a] m-5 p-8 h-40 w-[92%] border-2 border-[#555555] rounded-lg box-border' />

              <button className='bg-[#21c9b3] h-12 w-[92%] block mx-auto shadow-[0_4px_15px_rgba(33,201,179,0.4)] rounded-xl text-white font-bold hover:bg-[#1db5a1] transition-all duration-300 active:bg-[#159a88]'>
                Add Note
              </button>
            </div>

            <div className='border-2 border-[#333333] rounded-lg flex flex-col h-65w-full mt-6'>
              <h4 className='p-4 text-xl font-bold text-white border-b-2 border-[#555555] w-[92%] mx-auto  '>All Notes (1)</h4>

              <div className=' bg-[#3a3a3a] m-5 p-8 h-44 w-[92%] border-2 border-[#555555] rounded-lg box-border '>
                <h2 className='text-xl font-bold text-white '>MERN</h2>
                <p className='mt-2'>A Beautiful Website using mern stack.</p>

                <div className='flex gap-4 mt-4'>
                  <button className="bg-emerald-500 text-white px-6 py-2 rounded-md font-medium shadow-[0_4px_12px_rgba(16,185,129,0.4)] hover:bg-emerald-600 hover:shadow-[0_6px_15px_rgba(16,185,129,0.6)] active:scale-95 transition-all duration-300">Edit</button>

                  <button className="bg-red-500 text-white px-6 py-2 rounded-md font-medium shadow-[0_4px_12px_rgba(239,68,68,0.4)] hover:bg-red-600 hover:shadow-[0_6px_15px_rgba(239,68,68,0.6)] active:scale-95 transition-all duration-300">Delete</button>
                </div>
              </div>

            </div>
          </form>
        </div>
     </div>
    </>
  )
}


export default App
