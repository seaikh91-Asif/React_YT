import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className="flex flex-col gap-3 p-4">
      <img 
        src={props.img} 
        alt={props.tag || 'card'} 
        className="w-full h-48 object-cover rounded-xl"
      />
      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
        {props.tag}
      </span>
      <p className="text-sm text-gray-800">
        {props.intro}
      </p>
    </div>
  )
}

export default RightCardContent