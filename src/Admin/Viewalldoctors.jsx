import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import config from '../config';

export default function ViewallDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`${config.url}/admin/alldoctors`)
      .then(res => {
        setDoctors(res.data);
      })
      .catch(err => {
        toast.error('Failed to fetch doctors.');
        setError('Unable to load doctors.');
        console.error(err);
      });
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '30px',
    minHeight: '90vh',
    backgroundColor: '#f4f7fc',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '1100px',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '25px',
    color: '#003366',
    fontWeight: 'bold',
    fontSize: '26px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    backgroundColor: '#005792',
    color: '#ffffff',
    padding: '14px',
    textAlign: 'left',
    fontSize: '16px',
  };

  const tdStyle = {
    padding: '12px 14px',
    fontSize: '15px',
    borderBottom: '1px solid #e0e0e0',
    backgroundColor: '#fafafa',
  };

  const rowHoverStyle = {
    transition: 'background-color 0.3s',
  };

  return (
    <div style={containerStyle}>
      <ToastContainer position="top-center" autoClose={3000} />
      <div style={cardStyle}>
        <h3 style={headingStyle}>All Registered Doctors</h3>

        {doctors.length > 0 ? (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Username</th>
                <th style={thStyle}>Specialization</th>
                <th style={thStyle}>Experience</th>
                <th style={thStyle}>Mobile</th>
                <th style={thStyle}>Location</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doc, index) => (
                <tr
                  key={index}
                  style={rowHoverStyle}
                  onMouseOver={e => e.currentTarget.style.backgroundColor = '#f1faff'}
                  onMouseOut={e => e.currentTarget.style.backgroundColor = '#fafafa'}
                >
                  <td style={tdStyle}>{doc.name}</td>
                  <td style={tdStyle}>{doc.email}</td>
                  <td style={tdStyle}>{doc.username}</td>
                  <td style={tdStyle}>{doc.specialization}</td>
                  <td style={tdStyle}>{doc.experience} yrs</td>
                  <td style={tdStyle}>{doc.mobile}</td>
                  <td style={tdStyle}>{doc.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ textAlign: 'center', color: 'gray', fontSize: '18px' }}>{error || 'No doctors found.'}</p>
        )}
      </div>
    </div>
  );
}
