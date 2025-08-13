
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

const AlumniDirectory = () => {

  const [alumni,setAlumni]=useState([])

  useEffect(()=>{
    const fetchAlumni=async()=>{

       try{
      const token=localStorage.getItem('token')
      const res=await axios.get('http://localhost:5000/alumni/alumni-by-college',{
        headers: { Authorization: `Bearer ${token}` }
      });

      setAlumni(res.data)

    }catch(err){
      console.log(err)
    }

    }
    fetchAlumni()
   
  },[])
  return (
    <>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {alumni.map((a) => (
    <div
      key={a._id}
      className="bg-white border rounded-lg shadow overflow-hidden"
    >
      {/* Banner */}
      <div className="bg-indigo-600 h-20 relative">
        {/* Profile Image */}
        <img
          src={a.profilePic}
          alt={a.name}
          className="w-20 h-20 rounded-full object-cover border-4 border-white absolute left-4 top-10"
        />
      </div>

      {/* Card Body */}
      <div className="flex justify-between pt-14 pb-4 px-4 text-left">
        <div>
           <h3 className="font-semibold text-lg">{a.name}</h3>
        <p className="text-gray-600 text-sm">
          {a.branch} ({a.graduationYear})
        </p>
        <p className="text-xs text-gray-500">{a.college?.name}</p>
        </div>
       
       <div>
       <button className="px-3 py-1   text-black text-sm rounded-full border border-black hover:cursor-pointer hover:bg-blue-600 hover:text-white transition duration-200 shadow">
      View Profile
    </button>
       </div>


        
      </div>

      
    </div>
  ))}
</div>





    </>
  )
}

export default AlumniDirectory
