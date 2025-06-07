import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AlumniRegistration from './pages/AlumniRegistration.jsx'
import AlumniPortal from './pages/AlumniPortal.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<HomePage />}/>
      <Route path='/register' element={<AlumniRegistration/>} />
      <Route path="/portal" element={<AlumniPortal />} />
     </Routes>
    </BrowserRouter>
  </StrictMode>,
)
