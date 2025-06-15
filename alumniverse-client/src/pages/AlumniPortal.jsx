// DashboardLayout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import AlumniNavbar from '../components/AlumniNavbar';

const AlumniPortal = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
    <AlumniNavbar />
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-100 p-6 space-y-4">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">Alumniverse</h2>
        <nav className="space-y-2">
          <button onClick={() => navigate('/portal/dashboard')} className="block w-full text-left text-gray-700 hover:text-indigo-600" >🏠 Dashboard</button>
          <button className="block w-full text-left text-gray-700 hover:text-indigo-600" onClick={() => navigate('/portal/profile')}>👤 My Profile</button>
          <button className="block w-full text-left text-gray-700 hover:text-indigo-600" onClick={() => navigate('/portal/announcements')}>📢 Announcements</button>
          <button className="block w-full text-left text-gray-700 hover:text-indigo-600" onClick={() => navigate('/portal/forum')}>💬 Forum</button>
          <button className="block w-full text-left text-gray-700 hover:text-indigo-600" onClick={() => navigate('/portal/jobs')}>💼 Jobs</button>
          <button className="block w-full text-left text-gray-700 hover:text-indigo-600" onClick={() => navigate('/portal/mentorship')}>🎓 Mentorship</button>
          <button className="block w-full text-left text-gray-700 hover:text-indigo-600" onClick={() => navigate('/portal/resources')}>📚 Resources</button>
          <button className="block w-full text-left text-red-600 mt-6" onClick={handleLogout}>🚪 Logout</button>
        </nav>
      </aside>

      
      

      {/* Main Content */}
      <main className="flex-1 bg-white p-8">
        <Outlet />
        
      </main>
    </div>
    </>
  );
};

export default AlumniPortal;
