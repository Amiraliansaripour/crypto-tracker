import { useState } from 'react'

import './App.css'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
   
    </div>
  )
}

export default App
