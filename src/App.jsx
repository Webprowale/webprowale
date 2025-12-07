import { Children, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import UseLayout from './Components/UseLayout'
import Resume from './Pages/Resume'
import BlogDetail from './Pages/BlogDetail'
import Assest from './Pages/Assest'
import Payment from './Pages/Payment'
import CaseStudy from './Pages/CaseStudy'
import ErrorBoundary from './Components/ErrorBoundary'
import SchemaMarkup from './Components/SchemaMarkup'
import { usePageTracking } from './hooks/usePageTracking'

function AppContent() {
  // Track page views
  usePageTracking();

  return (
    <div className="container-fluild py-3">
      <SchemaMarkup />
      <UseLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogDetail />} />
          <Route path='/case-study/:slug' element={<CaseStudy />} />
          <Route path='/assest/:id' element={<Assest />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/pay' element={<Payment />} />
        </Routes>
      </UseLayout>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AppContent />
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App
