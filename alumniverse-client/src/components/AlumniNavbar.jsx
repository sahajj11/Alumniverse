// components/PortalNavbar.jsx
import React from 'react';

const PortalNavbar = () => {
  const alumni = JSON.parse(localStorage.getItem('alumni'));

  return (
    <nav className="w-full bg-indigo-600 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">
        {alumni?.college ? `${alumni.college} Alumni Portal` : 'Alumni Portal'}
      </h1>
      <p className="text-sm ">Welcome, {alumni?.name || 'User'}</p>
    </nav>
  );
};

export default PortalNavbar;
