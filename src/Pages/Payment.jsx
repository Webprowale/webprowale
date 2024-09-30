import React from 'react'
import PayForm from '../Components/Pay'
const Payment = () => {
  return (
    <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <h1 className='primaryColor rounded  fw-bold'>Generate Payment</h1>
        <p className='text-center'>You can use this page to complete your payment.</p>
        </div>
        <center>
        <PayForm />
        </center>
      
    </div>
  )
}

export default Payment