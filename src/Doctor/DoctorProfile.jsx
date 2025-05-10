import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, Avatar } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import config from '../config';

export default function DoctorProfile() {
  const [doctor, setDoctor] = useState(null);
  const doctorId = sessionStorage.getItem('doctor_id');

  useEffect(() => {
    if (doctorId) {
      axios.get(`${config.url}/doctor/profile/${doctorId}`)
        .then(res => setDoctor(res.data))
        .catch(err => {
          toast.error('Failed to load profile.');
          console.error(err);
        });
    } else {
      toast.error('Please login to view profile.');
    }
  }, [doctorId]);

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px',
  };

  const cardStyle = {
    maxWidth: 500,
    width: '100%',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    backgroundColor: '#ffffff',
    padding: '10px',
  };

  const titleStyle = {
    marginTop: '10px',
    fontWeight: '600',
  };

  const fieldStyle = {
    margin: '8px 0',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <ToastContainer position="top-center" autoClose={3000} />
      {doctor ? (
        <Card style={cardStyle}>
          <CardContent>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <Avatar sx={{ width: 80, height: 80, margin: '0 auto', bgcolor: '#2196f3' }}>
                {doctor.name?.charAt(0).toUpperCase()}
              </Avatar>
              <Typography variant="h5" style={titleStyle}>{doctor.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">{doctor.email}</Typography>
            </div>

            <Typography style={fieldStyle}><strong>Specialization:</strong> {doctor.specialization}</Typography>
            <Typography style={fieldStyle}><strong>Experience:</strong> {doctor.experience} years</Typography>
            <Typography style={fieldStyle}><strong>Mobile:</strong> {doctor.mobile}</Typography>
            <Typography style={fieldStyle}><strong>Location:</strong> {doctor.location}</Typography>

            <div style={{ textAlign: 'center', marginTop: '25px' }}>
              <Button variant="contained" color="primary">Edit Profile</Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="body1" color="textSecondary">Loading profile...</Typography>
      )}
    </div>
  );
}
