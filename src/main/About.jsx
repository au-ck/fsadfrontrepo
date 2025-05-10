import React from 'react';

const specialists = [
  {
    name: 'Dr. Aarav Sharma',
    specialty: 'Cardiologist',
    successRate: '98% in heart surgeries',
    expertise: 'Expertise in heart disease treatments and surgeries.'
  },
  {
    name: 'Dr. Priya Patel',
    specialty: 'Dermatologist',
    successRate: '95% in skin treatments',
    expertise: 'Skilled in acne, eczema, and skin cancer treatments.'
  },
  {
    name: 'Dr. Rajesh Reddy',
    specialty: 'Neurologist',
    successRate: '90% in treating strokes and epilepsy',
    expertise: 'Expert in brain and nervous system disorders.'
  },
  {
    name: 'Dr. Ananya Gupta',
    specialty: 'Pediatrician',
    successRate: '99% in child health treatments',
    expertise: 'Specializes in children\'s growth, vaccinations, and common illnesses.'
  },
  {
    name: 'Dr. Vivek Yadav',
    specialty: 'Orthopedic Surgeon',
    successRate: '97% in joint replacements',
    expertise: 'Treats bone and joint disorders with advanced surgical methods.'
  },
  {
    name: 'Dr. Radhika Sharma',
    specialty: 'Gynecologist',
    successRate: '96% in childbirth and surgeries',
    expertise: 'Provides expert care in women’s health and pregnancy.'
  },
  {
    name: 'Dr. Karan Singh',
    specialty: 'Endocrinologist',
    successRate: '92% in diabetes management',
    expertise: 'Specializes in hormonal disorders like diabetes and thyroid.'
  },
  {
    name: 'Dr. Neha Iyer',
    specialty: 'Oncologist',
    successRate: '88% in early cancer treatment',
    expertise: 'Expertise in cancer diagnosis and treatment.'
  },
  {
    name: 'Dr. Arjun Mehta',
    specialty: 'Psychiatrist',
    successRate: '94% in mental health treatments',
    expertise: 'Helps with anxiety, depression, and other mental health issues.'
  },
  {
    name: 'Dr. Aishwarya Verma',
    specialty: 'Ophthalmologist',
    successRate: '98% in cataract surgeries',
    expertise: 'Offers vision correction and eye health treatments.'
  },
  {
    name: 'Dr. Rahul Nair',
    specialty: 'Gastroenterologist',
    successRate: '93% in digestive health',
    expertise: 'Specializes in IBS, ulcers, and endoscopic procedures.'
  },
  {
    name: 'Dr. Meera Pillai',
    specialty: 'Nephrologist',
    successRate: '90% in kidney treatments',
    expertise: 'Expert in dialysis and kidney transplants.'
  },
  {
    name: 'Dr. Siddharth Joshi',
    specialty: 'Urologist',
    successRate: '91% in kidney stone treatments',
    expertise: 'Treats urinary tract issues and performs minimally invasive surgeries.'
  },
  {
    name: 'Dr. Sonal Kapoor',
    specialty: 'Allergist',
    successRate: '95% in allergy treatments',
    expertise: 'Manages allergies, asthma, and immune disorders.'
  },
  {
    name: 'Dr. Vikram Joshi',
    specialty: 'Rheumatologist',
    successRate: '92% in treating arthritis',
    expertise: 'Treats autoimmune diseases like rheumatoid arthritis.'
  },
  {
    name: 'Dr. Shruti Rao',
    specialty: 'Radiologist',
    successRate: '98% in diagnostic imaging',
    expertise: 'Provides accurate diagnoses using advanced imaging technologies.'
  },
];

export default function About() {
  const styles = {
    container: {
      fontFamily: 'Segoe UI, sans-serif',
      padding: '40px 20px',
      backgroundColor: '#f4f9f9',
      color: '#333',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    heading: {
      textAlign: 'center',
      fontSize: '2.5rem',
      marginBottom: '10px',
      color: '#004080'
    },
    subText: {
      textAlign: 'center',
      fontSize: '1.1rem',
      maxWidth: '900px',
      margin: '0 auto 40px auto',
      lineHeight: '1.6'
    },
    sectionHeading: {
      fontSize: '2rem',
      color: '#003366',
      marginBottom: '20px'
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
    },
    cardHover: {
      transform: 'scale(1.02)'
    },
    cardTitle: {
      color: '#006699',
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '8px'
    },
    cardText: {
      fontSize: '0.95rem',
      lineHeight: '1.5'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Sanjivani Multi-Specialty Hospital</h1>
      <p style={styles.subText}>
        Sanjivani Multi-Specialty Hospital is a leading healthcare provider offering state-of-the-art medical care and services.
        Our hospital is dedicated to delivering high-quality healthcare with a patient-centric approach. We house a team of highly
        qualified and experienced specialists who work with advanced medical technology to ensure the best outcomes for our patients.
      </p>

      <h2 style={styles.sectionHeading}>Our Specialists</h2>
      <div style={styles.cardGrid}>
        {specialists.map((doctor, index) => (
          <div key={index} className="specialist-card" style={styles.card}>
            <h3 style={styles.cardTitle}>{doctor.name} - {doctor.specialty}</h3>
            <p style={styles.cardText}><strong>Success Rate:</strong> {doctor.successRate}</p>
            <p style={styles.cardText}><strong>Expertise:</strong> {doctor.expertise}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
