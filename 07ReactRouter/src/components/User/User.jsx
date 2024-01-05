import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams(); 
  return (
    <div className='bg-orange-400 flex justify-center items-center p-5 text-3xl font-semibold'>User: {userid}</div>
  )
}

export default User