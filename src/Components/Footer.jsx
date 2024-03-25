import React from 'react'
import { Link } from 'react-router-dom';
const date = new Date();
const year = date.getFullYear()
function Footer() {
  return (
    <div className='container-fluid pt-2 pb-1 mt-5'>
     <div className=" d-flex">
     <span className='fw-semibold fs-6'>&copy;{year}</span>
     <Link className=' fs-6 fw-semibold ms-1'>webprowale</Link>
     </div>
    </div>
  )
}

export default Footer