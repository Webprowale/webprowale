import { Children, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from './Pages/Home'
import UseLayout from './Components/UseLayout'

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
