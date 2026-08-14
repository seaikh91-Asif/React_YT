import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetails = () => {

    const params = useParams()
    console.log(params)

  return (
    <div>
        <h1>{params.id} CoursesDetails | Page</h1>
    </div>
  )
} 

export default CoursesDetails