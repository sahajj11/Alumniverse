// AlumniPortal.jsx
import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import AlumniNavbar from '../components/AlumniNavbar';
import AlumniFooter from '../components/AlumniFooter';

const AlumniPortal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const menuItems = [
    { path: '/portal/dashboard', label: 'Alumni Directory', icon: '👥' },
    { path: '/portal/profile', label: 'My Profile', icon: '👤' },
    { path: '/portal/announcements', label: 'Announcements', icon: '📢' },
    { path: '/portal/forum', label: 'Forum', icon: '💬' },
    { path: '/portal/jobs', label: 'Jobs', icon: '💼' },
    { path: '/portal/mentorship', label: 'Mentorship', icon: '🎓' },
    { path: '/portal/resources', label: 'Resources', icon: '📚' },
  ];

  return (
    <>
      <AlumniNavbar />

      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 shadow-lg flex flex-col justify-between border-r">
          <div className="p-6">
            <h2 className="text-2xl font-extrabold text-indigo-600 tracking-wide">
              Alumniverse
            </h2>

            <nav className="mt-8 space-y-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`flex items-center w-full px-4 py-2 rounded-lg transition 
                      ${
                        isActive
                          ? 'bg-indigo-100 text-indigo-700 font-semibold'
                          : 'text-gray-700 hover:bg-indigo-100 hover:text-indigo-700'
                      }`}
                  >
                     <span className="ml-3">{item.label}</span>
                  </button>
                );
              })}
            </nav>
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-red-600 rounded-lg hover:bg-red-100 hover:text-red-700 transition"
            >
               <span className="ml-3">Logout</span>
            </button>
          </div>

         
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8">
          <Outlet />
        </main>
      </div>

      <AlumniFooter />
    </>
  );
};

export default AlumniPortal;
