import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import HeroText from './HeroText';
import Arrow from './Arrow';

const LeftContent = () => {
  return (
    <div className='h-full w-3/10  flex flex-col justify-between '>
        <HeroText/>
       <Arrow/>
    </div>

  )
}

export default LeftContent