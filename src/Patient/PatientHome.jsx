import React, { useState, useEffect } from 'react';

export default function PatientHome() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome, Patient</h1>
        <p style={styles.subtitle}>Book appointments, view prescriptions, and manage your health</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #e0f7fa, #f1f8e9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '120px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px 60px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    color: '#d17c00',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#555',
  },
};