import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full flex flex-nowrap gap-10 p-6 w-7/10  '>
        
    {props.users?.map(function(elem){
      
      return <RightCard  img = {elem.img} />
    })}
    </div>
  )
}

export default RightContent