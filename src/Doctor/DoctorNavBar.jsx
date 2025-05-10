import React from 'react';
import DoctorHome from './DoctorHome';
import DoctorLogin from './DoctorLogin';
import DoctorProfile from './DoctorProfile';
import MyAppointments from './MyAppointments';
import { Link, Route, Routes } from 'react-router-dom';
import { useAuth } from '../contextapi/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DoctorNavBar() {
  const { setIsDoctorLoggedIn } = useAuth();

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.removeItem('doctor_id');
    sessionStorage.removeItem('doctor_name');
    setIsDoctorLoggedIn(false);
  };

  return (
    <div>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <span className="navbar-brand">Welcome Doctor</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#doctorNavbar"
            aria-controls="doctorNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="doctorNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/doctorhome">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/doctorprofile">Doctor Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/myappointment">Appointments</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/doctorlogin" onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes Section */}
      <div className="container mt-4">
        <Routes>
          <Route path="/doctorhome" element={<DoctorHome />} />
          <Route path="/doctorprofile" element={<DoctorProfile />} />
          <Route path="/myappointment" element={<MyAppointments />} />
          <Route path="/doctorlogin" element={<DoctorLogin />} />
        </Routes>
      </div>
    </div>
  );
}
