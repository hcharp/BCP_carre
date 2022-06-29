import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login, Schedule, Grade, NotFound } from './pages'
import { Navigationbar } from './components'

import './App.css'

const App = () => {

  const pathname = window.location.pathname

  return (
    <>
      {pathname === '/home' || pathname === '/schedule' || pathname === '/grade' ? <Navigationbar /> : null}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/grade" element={<Grade />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App