import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from "./About";
import Navbar from "./Components/NavBar";
import App from "./App"
import LoginForm from "./Components/LoginForm";
import Home from "./Home"

function FirstPage() {
  return (
    <div>
         <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/App" element={<App/>} />
        
        
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default FirstPage