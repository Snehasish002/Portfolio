import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Navbar />
      <Hero/>
      <Skills/>
      <Portfolio/>
      <Experience/>
      
      <Footer/>
      
      
    </>
  )
}

export default App
