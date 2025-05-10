import React from 'react';

export default function AdminHome() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome to Admin DashBoard</h1>
        <p style={styles.subtitle}>Manage everything from one place</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #e0ecff, #f5f9ff)', // subtle gradient
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '120px', // move box upward
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px 60px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  title: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#555',
  },
};