import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login } from './pages'

import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App