import React, { useEffect, useState } from "react";
import axios from "axios";

const AlumniMyProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/alumni/get-my-profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return <p className="p-6">Loading profile...</p>;
  }

  return (
    <>
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Banner */}
      <div className="bg-indigo-600 h-40 relative rounded-t-lg">
        <img
          src={user.profilePic || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-white absolute left-6 bottom-[-3rem]"
        />
      </div>

      {/* Name + Basic Info */}
      

      <div className="bg-white shadow p-6 pt-16 rounded-b-lg flex justify-between" >
        <div>
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-gray-600">{user.branch} ({user.graduationYear})</p>
        <p className="text-sm text-gray-500">{user.college?.name}</p>
        {user.bio && <p className="mt-4">{user.bio}</p>}
        </div>

        <div>
           <button className="px-3 py-1   text-black text-sm rounded-full border border-black hover:cursor-pointer hover:bg-blue-600 hover:text-white transition duration-200 shadow">
      Edit Profile
    </button>
        </div>
      </div>

      

      {/* Contact Info */}
      <div className="bg-white shadow p-6 mt-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
    </>
  );
};

export default AlumniMyProfile;
