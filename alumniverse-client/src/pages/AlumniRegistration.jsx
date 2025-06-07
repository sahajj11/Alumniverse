import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const AlumniAuth = () => {
  const navigate=useNavigate() 

  const handleHome=()=>{
    navigate("/")
  }
  const [isRegistering, setIsRegistering] = useState(true);
  const [message, setMessage] = useState('');

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    branch: '',
    graduationYear: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/alumni/register', registerData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/alumni/login', loginData);
      setMessage(res.data.message);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("alumni", JSON.stringify(res.data.alumni));

      navigate("/portal")
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <>
    <nav className="flex justify-between items-center px-6 py-4  bg-white">
          <h1 onClick={handleHome} className="text-2xl font-bold text-blue-700">Alumniverse</h1>
          
        </nav>
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setIsRegistering(false)}
            className={`w-1/2 py-2 font-semibold rounded-l-lg ${
              !isRegistering ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
            } transition duration-200`}
          >
            Login
          </button>
          <button
            onClick={() => setIsRegistering(true)}
            className={`w-1/2 py-2 font-semibold rounded-r-lg ${
              isRegistering ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
            } transition duration-200`}
          >
            Register
          </button>
        </div>

        {message && (
          <div className="mb-4 text-center text-sm text-indigo-700 bg-indigo-100 p-2 rounded">
            {message}
          </div>
        )}

        {isRegistering ? (
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleRegisterChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleRegisterChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleRegisterChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="text"
              name="branch"
              placeholder="Branch"
              onChange={handleRegisterChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="number"
              name="graduationYear"
              placeholder="Graduation Year"
              onChange={handleRegisterChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition duration-200"
            >
              Register
            </button>
          </form>
        ) : (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleLoginChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleLoginChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition duration-200"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>

    <Footer />
    </>
  );
};

export default AlumniAuth;