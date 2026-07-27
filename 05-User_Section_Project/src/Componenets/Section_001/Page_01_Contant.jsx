import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page_01_Contant = (props) => {
  return (
    <div className=' flex gap-10 items-center py-3 h-[90vh] px-18 '>
        <LeftContent/>
        <RightContent users = {props.users} />

    </div>
  )
}

export default Page_01_Contant