import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experiance from './components/Experiance'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Aos from 'aos'
import "aos/dist/aos.css"
const Apps = () => {
  useEffect(() => {
    Aos.init();
  
  }, [])
  
  return (
    <>
    <Navbar/>
    <div className='container'>
    <Home/>
    <Experiance/>
    <Skills/>
    <Contact/>
    </div>
    </>
  )
}

export default Apps