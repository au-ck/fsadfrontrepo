import React from 'react'
import AddDoctor from './AddDoctor'
import ViewAllDoctors from './Viewalldoctors';
import ViewAllPatients from './Viewallpatients';
import AdminHome from './AdminHome';
import AdminLogin from './AdminLogin';
import { Routes, Route, Link } from 'react-router-dom';
import { useAuth } from '../contextapi/AuthContext';


export default function AdminNavBar() {
  const { setIsAdminLoggedIn } = useAuth(); 

  const handleLogout = () => 
  {
    setIsAdminLoggedIn(false); 
  };
  return (
    <div>
        <nav className="navbar">
        <div className="logo">Welcome Admin</div>
        <ul className="nav-links">
        <li><Link to="/adminhome">Home</Link></li>
        <li><Link to="/adddoctor">Add Doctor</Link></li>
        <li><Link to="/viewalldoctor">View doctors</Link></li>
        <li><Link to="/viewallpatients">View Patients</Link></li>
        <li><Link to="/adminlogin"onClick={handleLogout}>Logout</Link></li>
        </ul>
        </nav>
       <Routes>
        <Route path="/adminhome" element={<AdminHome/>} exact/>
        <Route path="/adddoctor" element={<AddDoctor/>} exact />
        <Route path="/viewalldoctor" element={<ViewAllDoctors/>} exact/>
        <Route path="/viewallpatients" element={<ViewAllPatients/>} exact/>
       </Routes>
    </div>
  )
}
