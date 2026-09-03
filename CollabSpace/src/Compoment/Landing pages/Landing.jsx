import React from 'react'
import Navbar from '../layout/Navbar'
import HeroSection from './heroSection'
import Features from './Features'
import HowItWorks from './HowItWorks'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Features/>
      <HowItWorks/>
    </div>
  )
}

export default Landing
