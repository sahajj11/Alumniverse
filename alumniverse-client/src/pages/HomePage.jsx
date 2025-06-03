import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
   <>
   <div>
   <Navbar />
   <Hero />
   <Features />
   <Contact />
   <Footer />
   </div>
   </>
  )
}

export default HomePage
