import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login, Schedule, Grade, NotFound } from './pages'
import WithNav from './containers/WithNav'
import WithoutNav from './containers/WithoutNav'

import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/home" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/grade" element={<Grade />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App