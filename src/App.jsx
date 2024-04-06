import { Children, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Footer from './Components/Footer'
import UseLayout from './Components/UseLayout'
import Resume from './Pages/Resume';


function App() {

  return (
    <div className="container-fluild py-3">
   <UseLayout>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/resume' element={<Resume />} />
     </Routes>
     </UseLayout>
     </div>
  )
}

export default App
