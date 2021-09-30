import { useState } from 'react'
import './App.css'
import Navbar from"./Components/navbar"
import Home from"./Components/home"
import About from './Components/about'
import Skills from './Components/skills'
import Footer from "./Components/footer"
import Projects from './Components/project'

function App() {

  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <About/>
       <Skills/>
       <Projects/>
       <Footer/>
    </div>
  )
}

export default App
