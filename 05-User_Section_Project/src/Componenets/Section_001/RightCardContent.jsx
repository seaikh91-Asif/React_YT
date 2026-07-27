import React from 'react'
import { ArrowRight } from 'lucide-react';
const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between">
            <h3 className='bg-white rounded-full w-13 h-13 flex justify-center items-center text-xxl font-semibold'>1</h3>
            <div>
                <p className='text-lg leading-normal text-white mb-10'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button className=' bg-blue-400 text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
                    <button className=' bg-blue-400 text-white font-medium px-3 py-2 rounded-full '>
                        <ArrowRight />
                    </button>
                </div>
            </div>

        </div>
  )
}

export default RightCardContent