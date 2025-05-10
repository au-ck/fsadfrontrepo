import { useState } from 'react';

export default function Contact() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Contact Our Hospital</h1>
        
        <p style={styles.info}><strong>General Inquiries:</strong> +91 9999999999</p>
        <p style={styles.info}><strong>Emergency:</strong> 108 / +91 8888888888</p>
        <p style={styles.info}><strong>Email:</strong> care@gmail.com</p>
        <p style={styles.info}>
          <strong>Website:</strong>{' '}
          <a href="#" style={styles.link} onClick={(e) => e.preventDefault()}>
            www.healthhospital.com
          </a>
        </p>

        <p style={styles.info}><strong>Address:</strong><br />
          Health Hospital<br />
          Sant Colony, Vijyawada, Andhra Pradesh.
        </p>

        <p style={styles.info}><strong>Visiting Hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM</p>

        <p style={styles.info}><strong>Social Media:</strong><br />
          <a href="#" style={styles.link} onClick={(e) => e.preventDefault()}>Facebook</a> |{' '}
          <a href="#" style={styles.link} onClick={(e) => e.preventDefault()}>Instagram</a> |{' '}
          <a href="#" style={styles.link} onClick={(e) => e.preventDefault()}>Twitter</a>
        </p>

        <p style={styles.info}><strong>Find us on Google Maps:</strong><br />
          <a href="#" style={styles.link} onClick={(e) => e.preventDefault()}>
            View Location
          </a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '100px',
    backgroundColor: '#f2f7f5',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px 60px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    width: '600px',
  },
  title: {
    fontSize: '30px',
    color: '#007B5E',
    marginBottom: '25px',
  },
  info: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '15px',
    lineHeight: '1.6',
  },
  link: {
    color: '#007B5E',
    textDecoration: 'none',
    cursor: 'pointer',
  },
};