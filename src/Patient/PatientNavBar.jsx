import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Appointment from './Appointment';
import PatientHome from './PatientHome';
import PatientLogin from './PatientLogin';
import PatientProfile from './PatientProfile';
import PatientRegistration from './PatientRegistration';
import { useAuth } from '../contextapi/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PatientNavBar() {
  const { setIsPatientLoggedIn } = useAuth();

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.removeItem('patient_id');
    sessionStorage.removeItem('patient_name');
    setIsPatientLoggedIn(false);
  };

  return (
    <div>
      <nav className="navbar bg-info p-3">
        <div className="container">
          <Link className="navbar-brand text-white fw-bold" to="/patienthome">
            Patient Portal
          </Link>
          <div>
            <Link className="nav-link d-inline text-white me-3" to="/patienthome">
              Home
            </Link>
            <Link className="nav-link d-inline text-white me-3" to="/patientprofile">
              Patient Profile
            </Link>
            <Link className="nav-link d-inline text-white me-3" to="/appointment">
              Appointment
            </Link>
            <Link className="nav-link d-inline text-white" to="/patientlogin" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/patienthome" element={<PatientHome />} />
        <Route path="/patientprofile" element={<PatientProfile />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/patientlogin" element={<PatientLogin />} />
      </Routes>
    </div>
  );
}
