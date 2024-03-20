import React from 'react'
import web from '../Images/web1.png'
function SeeLatestWork() {
  return (
    <div className='rounded shadow px-3 pt-2 d-flex flex-column mt-3 con1'>
        <div className="mx-auto mt-3">
     <h6 className='fs-6 fw-semibold'>See My</h6>
     <h5 className='fs-6 fw-bold ms-4 mb-3'>Latest Work</h5>
     </div>
     <img src={web} width={150} height={100}  className='mx-auto'/>
     <div className="d-flex mb-1 ms-3" style={{gap:"60px"}}>
        <h3 className='small fw-semibold mb-2'>All Project</h3>
        <i className="fas fa-arrow-circle-right fs-5 primaryColor"></i>
    </div>
    </div>
  )
}

export default SeeLatestWork