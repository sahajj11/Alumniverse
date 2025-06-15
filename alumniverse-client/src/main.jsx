import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AlumniRegistration from './pages/AlumniRegistration.jsx'
import AlumniPortal from './pages/AlumniPortal.jsx'
import AlumniDashboard from './pages/AlumniDashboard.jsx'
import AlumniMyProfile from './pages/AlumniMyProfile.jsx'
import AlumniAnnoucements from './pages/AlumniAnnoucements.jsx'
import AlumniJobs from './pages/AlumniJobs.jsx'
import AlumniMentorship from './pages/AlumniMentorship.jsx'
import AlumniResources from './pages/AlumniResources.jsx'
import AlumniForum from './pages/AlumniForum.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<HomePage />}/>
      <Route path='/register' element={<AlumniRegistration/>} />
      <Route path="/portal" element={<AlumniPortal />} >
      <Route path="dashboard" element={<AlumniDashboard />} />
          <Route path="dashboard" element={<AlumniDashboard />} />
           <Route path="profile" element={<AlumniMyProfile />} />
            <Route path="announcements" element={<AlumniAnnoucements />} />
             <Route path="jobs" element={<AlumniJobs />} />
              <Route path="mentorship" element={<AlumniMentorship />} />
               <Route path="resources" element={<AlumniResources />} />
                <Route path="forum" element={<AlumniForum />} />
      </Route>
     </Routes>
    </BrowserRouter>
  </StrictMode>,
)
