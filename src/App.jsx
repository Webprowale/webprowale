import { useState } from 'react'
import Navber from './Components/Navber'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import SeeLatestWork from './Components/SeeLatestWork'


function App() {

  return (
    <div className="container-fluid px-1 py-3 app">
     <Navber />
     
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
     </Routes>
     <footer></footer>
    </div>
  )
}

export default App
