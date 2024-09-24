import React, { useEffect, useRef ,typedRef, typed} from 'react'
import pdf from '../pdf/resume.pdf.pdf'
import hero from './data/hero.json'
import Typed from 'typed.js'


const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {
    
    const options = {
   strings:["Well come to my profile","My Name Is Shakeel javed","I'm full stack developer",],
   typespeed: 70,
   backspeed: 70,
   loop:true
    }
  const typed = new Typed(typedRef.current ,options)
    return () => {
      typed.destroy()
    }
  }, [])
  
  return (
    <>
    <div className='container home' id='home'>
    <div className='left' data-aos="fade-up-right"
    data-aos-duration="1000">
    <h1 ref={typedRef}></h1>
    <a href={pdf} download="Resume.pdf" className='btn btn-outline-warning'>Download Resume</a>
    </div>
    <div className='right'>
    <div className='img' data-aos="fade-up-left"
    data-aos-duration="1000">
    <img src={`/assets/${hero.imgSrc}`} alt='hero'></img>
    </div>
    </div>
    </div>
    </>
  )
}

export default Home