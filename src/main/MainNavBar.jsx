import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import './style.css';

import PatientRegistration from './../Patient/PatientRegistration';
import DoctorLogin from './../Doctor/DoctorLogin';
import PatientLogin from './../Patient/PatientLogin';
import AdminLogin from './../Admin/AdminLogin';

export default function MainNavBar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Health Care Appointment System Project</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/registration">Register</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="dropdown">
            <span>Login ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/patientlogin">Patient</Link></li>
              <li><Link to="/doctorlogin">Doctor</Link></li>
              <li><Link to="/adminlogin">Admin</Link></li>
              
            </ul>
          </li>
          
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/registration" element={<PatientRegistration />} exact />
        <Route path="/patientlogin" element={<PatientLogin />} exact />
        <Route path="/doctorlogin" element={<DoctorLogin />} exact />
        <Route path="/adminlogin" element={<AdminLogin />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="*" element={<NotFound />} exact />
      </Routes>
    </div>
  );
}