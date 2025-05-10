import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from '../config';

export default function PatientRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
    username: '',
    password: '',
    mobileno: '',
    location: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/patient/registration`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        setFormData({
          name: '',
          gender: '',
          dob: '',
          email: '',
          username: '',
          password: '',
          mobileno: '',
          location: ''
        });
      }
    } catch (e) {
      setMessage('');
      setError(e.response?.data || 'Unexpected error occurred...!');
    }
  };

  return (
    <div style={styles.page}>
      {/* Inline Custom CSS for Button */}
      <style>{`
        .btn-gradient {
          background: linear-gradient(to right, #36d1dc, #5b86e5);
          color: white;
          font-weight: 600;
          transition: all 0.3s ease-in-out;
        }
        .btn-gradient:hover {
          background: linear-gradient(to right, #5b86e5, #36d1dc);
          transform: scale(1.03);
        }
      `}</style>

      <div className="container d-flex justify-content-center align-items-center">
        <div style={styles.card}>
          <h2 className="text-center text-primary mb-4 fw-bold border-bottom pb-2">
            Patient Registration
          </h2>

          {message && <div className="alert alert-success text-center">{message}</div>}
          {error && <div className="alert alert-danger text-center">{error}</div>}

          <form onSubmit={handleSubmit}>
            <FormInput label="Full Name" id="name" type="text" value={formData.name} onChange={handleChange} />
            <div className="mb-3">
              <label className="form-label fw-semibold">Gender</label>
              <select id="gender" className="form-select shadow-sm" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <FormInput label="Date of Birth" id="dob" type="date" value={formData.dob} onChange={handleChange} />
            <FormInput label="Email" id="email" type="email" value={formData.email} onChange={handleChange} />
            <FormInput label="Username" id="username" type="text" value={formData.username} onChange={handleChange} />
            <FormInput label="Password" id="password" type="password" value={formData.password} onChange={handleChange} />
            <FormInput label="Mobile No" id="mobileno" type="number" value={formData.mobileno} onChange={handleChange} />
            <FormInput label="Location" id="location" type="text" value={formData.location} onChange={handleChange} />

            <button type="submit" className="btn btn-gradient w-100 mt-3 shadow-sm">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function FormInput({ label, id, type, value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label fw-semibold">{label}</label>
      <input
        type={type}
        id={id}
        className="form-control shadow-sm"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

const styles = {
  page: {
    background: 'linear-gradient(to right, #e0f7fa, #f1f8e9)',
    minHeight: '100vh',
    padding: '60px 0',
  },
  card: {
    background: '#ffffff',
    padding: '40px 35px',
    borderRadius: '16px',
    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
  },
};