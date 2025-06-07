import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <nav className="flex justify-between items-center px-6 py-4  bg-white">
      <h1 className="text-2xl font-bold text-blue-700">Alumniverse</h1>
      <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Login
      </Link>
    </nav>
   </>
  )
}

export default Navbar
