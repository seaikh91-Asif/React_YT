import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div 
            className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl p-4 flex flex-col justify-between'
            style={{ backgroundColor: props.color || '#f3f4f6' }}
        >
            <RightCardContent 
                img={props.img} 
                tag={props.tag} 
                intro={props.intro} 
            />
        </div>
    )
}

export default RightCard