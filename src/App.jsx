import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
const App = () => {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <>
    
    <Router>
      <Navbar darkMode={darkMode} setdarkMode={setdarkMode}></Navbar>
      <Routes>
        <Route path='/' element={<Home darkMode={darkMode}></Home>}></Route>
        <Route path='/about' element={<About darkMode={darkMode}></About>}></Route>
        <Route path='/projects' element={<Projects darkMode={darkMode}></Projects>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App