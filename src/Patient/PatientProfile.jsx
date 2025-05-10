import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, Avatar } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import config from '../config';

export default function PatientProfile() {
  const [patient, setPatient] = useState(null);
  const patientId = sessionStorage.getItem('patient_id');

  useEffect(() => {
    if (patientId) {
      axios.get(`${config.url}/patient/profile/${patientId}`)
        .then(res => setPatient(res.data))
        .catch(err => {
          toast.error('Failed to load profile.');
          console.error(err);
        });
    } else {
      toast.error('Please login to view profile.');
    }
  }, [patientId]);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #e0f7fa, #f1f8e9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <ToastContainer position="top-center" autoClose={3000} />
      {patient ? (
        <Card
          sx={{
            maxWidth: 500,
            width: '100%',
            boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
            borderRadius: '20px',
            padding: '20px',
            backgroundColor: '#ffffff'
          }}
        >
          <CardContent>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  margin: '0 auto',
                  backgroundColor: '#00796b'
                }}
              />
              <Typography variant="h5" sx={{ marginTop: 2, fontWeight: 600 }}>
                {patient.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {patient.email}
              </Typography>
            </div>

            <Typography sx={{ marginBottom: 1 }}><strong>Gender:</strong> {patient.gender}</Typography>
            <Typography sx={{ marginBottom: 1 }}><strong>Date of Birth:</strong> {patient.dob}</Typography>
            <Typography sx={{ marginBottom: 1 }}><strong>Mobile:</strong> {patient.mobile}</Typography>
            <Typography sx={{ marginBottom: 2 }}><strong>Location:</strong> {patient.location}</Typography>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: '30px',
                  padding: '10px 25px',
                  textTransform: 'none',
                  fontWeight: 500,
                  backgroundColor: '#00796b',
                  '&:hover': {
                    backgroundColor: '#004d40'
                  }
                }}
              >
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6" color="textSecondary">Loading profile...</Typography>
      )}
    </div>
  );
}
