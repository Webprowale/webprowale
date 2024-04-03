import React from 'react'
import Navber from './Navber'
import Footer from './Footer'

function UseLayout({children}) {
  return (
    <div>
        <Navber />
        {children}
        <Footer />
    </div>
  )
}

export default UseLayout