import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import config from '../config';

export default function AddDoctor() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    specialization: '',
    experience: '',
    mobile: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${config.url}/admin/adddoctor`, formData);
      if (res.status === 200) {
        toast.success('Doctor added successfully!');
        setFormData({
          name: '',
          email: '',
          username: '',
          password: '',
          specialization: '',
          experience: '',
          mobile: '',
          location: ''
        });
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to add doctor.');
    }
  };

  return (
    <div className="add-doctor-container">
      <style>{`
        .add-doctor-container {
          max-width: 600px;
          margin: 50px auto;
          padding: 30px;
          background: #f5f9ff;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .add-doctor-container h3 {
          color: #004080;
          text-align: center;
          margin-bottom: 25px;
        }

        .form-group label {
          font-weight: 500;
          color: #333;
        }

        .form-control {
          margin-top: 5px;
          margin-bottom: 15px;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          transition: border 0.3s ease;
        }

        .form-control:focus {
          border-color: #007bff;
          outline: none;
        }

        .btn-success {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          font-weight: bold;
          background-color: #28a745;
          border: none;
          border-radius: 10px;
          transition: background-color 0.3s ease;
        }

        .btn-success:hover {
          background-color: #218838;
        }
      `}</style>

      <ToastContainer position="top-center" autoClose={3000} />
      <h3>Add New Doctor</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" className="form-control" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Specialization</label>
          <input type="text" name="specialization" className="form-control" value={formData.specialization} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Experience (in years)</label>
          <input type="number" name="experience" className="form-control" value={formData.experience} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Mobile No</label>
          <input type="tel" name="mobile" className="form-control" value={formData.mobile} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input type="text" name="location" className="form-control" value={formData.location} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success mt-3">Add Doctor</button>
      </form>
    </div>
  );
}
