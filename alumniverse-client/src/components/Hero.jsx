import React from 'react'
import network from "../assets/bgr.png"

const Hero = () => {
  return (
   <>
   <div className='flex items-center mt-3  bg-gradient-to-r from-blue-100 to-blue-300'>
   <div className="left">

    <section className="text-center py-20 px-6 ">
      <h2 className="text-xl md:text-5xl font-bold mb-6">
        Your College. Your Alumni Network.
      </h2>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Alumniverse gives every college its own private alumni network — secure,
        college-specific, and built for real connection.
      </p>
      <a
        href="#contact"
        className="bg-blue-600 text-white px-6 py-3 rounded text-lg hover:bg-blue-700 transition"
      >
        Get Started
      </a>

      
    </section>

   </div>

  <div className="right">

    <img src={network} class="w-[400px]" />
   

  </div>
  </div>
   </>
  )
}

export default Hero
