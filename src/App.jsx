import { Children, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import UseLayout from './Components/UseLayout'
import Resume from './Pages/Resume';
import BlogDetail from './Pages/BlogDetail'
import Assest from './Pages/Assest'
import Payment from './Pages/Payment'

function App() {

  return (
    <div className="container-fluild py-3">
   <UseLayout>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog/:id' element={<BlogDetail />} />
      <Route path='/assest/:id' element={<Assest />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/pay' element={<Payment />} />
     </Routes>
     </UseLayout>
     </div>
  )
}

export default App
