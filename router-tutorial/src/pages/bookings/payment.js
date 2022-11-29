import React from 'react'
import { useParams } from 'react-router-dom'

const Payment = () => {
  const params = useParams(); 
  console.log(params); 
  return (
    <div>Payment</div>
  )
}

export default Payment