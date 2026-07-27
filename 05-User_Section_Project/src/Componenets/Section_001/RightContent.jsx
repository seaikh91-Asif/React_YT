import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full flex flex-nowrap gap-10 p-6 w-7/10  '>
        
    {props.users?.map(function(elem, idx){
      
      return <RightCard key = {idx} img = {elem.img} tag = {elem.tag} intro = {elem.intro} />
    })}
    </div>
  )
}

export default RightContent