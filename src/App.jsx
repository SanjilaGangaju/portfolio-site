import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
const App = () => {
  return (
    <>
    
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about-me' element={<About></About>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App