import React from 'react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Aarav Sharma',
    specialization: 'Cardiologist',
    image: 'https://images.pexels.com/photos/1170973/pexels-photo-1170973.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 2,
    name: 'Dr. Priya Patel',
    specialization: 'Dermatologist',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 3,
    name: 'Dr. Rajesh Reddy',
    specialization: 'Neurologist',
    image: 'https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 4,
    name: 'Dr. Ananya Gupta',
    specialization: 'Pediatrician',
    image: 'https://images.pexels.com/photos/4246825/pexels-photo-4246825.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 5,
    name: 'Dr. Vivek Yadav',
    specialization: 'Orthopedic Surgeon',
    image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 6,
    name: 'Dr. Radhika Sharma',
    specialization: 'Gynecologist',
    image: 'https://images.pexels.com/photos/1181309/pexels-photo-1181309.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 7,
    name: 'Dr. Karan Singh',
    specialization: 'Endocrinologist',
    image: 'https://images.pexels.com/photos/3777646/pexels-photo-3777646.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 8,
    name: 'Dr. Neha Iyer',
    specialization: 'Oncologist',
    image: 'https://images.pexels.com/photos/5327582/pexels-photo-5327582.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 9,
    name: 'Dr. Arjun Mehta',
    specialization: 'Psychiatrist',
    image: 'https://images.pexels.com/photos/4146121/pexels-photo-4146121.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 10,
    name: 'Dr. Aishwarya Verma',
    specialization: 'Ophthalmologist',
    image: 'https://images.pexels.com/photos/1148984/pexels-photo-1148984.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 11,
    name: 'Dr. Rahul Nair',
    specialization: 'Gastroenterologist',
    image: 'https://images.pexels.com/photos/4021784/pexels-photo-4021784.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 12,
    name: 'Dr. Meera Pillai',
    specialization: 'Nephrologist',
    image: 'https://images.pexels.com/photos/4386461/pexels-photo-4386461.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 13,
    name: 'Dr. Siddharth Joshi',
    specialization: 'Urologist',
    image: 'https://images.pexels.com/photos/3993603/pexels-photo-3993603.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 14,
    name: 'Dr. Sonal Kapoor',
    specialization: 'Allergist',
    image: 'https://images.pexels.com/photos/4386461/pexels-photo-4386461.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 15,
    name: 'Dr. Vikram Joshi',
    specialization: 'Rheumatologist',
    image: 'https://images.pexels.com/photos/3679066/pexels-photo-3679066.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 16,
    name: 'Dr. Shruti Rao',
    specialization: 'Radiologist',
    image: 'https://images.pexels.com/photos/4246825/pexels-photo-4246825.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  }
];

export default function DoctorList() {
  return (
    <div style={styles.container}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

          .doctor-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            margin-top: 30px;
          }

          .doctor-card {
            background: #fff;
            padding: 20px;
            border-radius: 16px;
            text-align: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .doctor-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.15);
          }

          .doctor-img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 15px;
          }

          .doctor-card h3 {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
            color: #2c3e50;
          }

          .doctor-card p {
            margin-top: 6px;
            font-size: 14px;
            color: #7f8c8d;
          }

          .doctor-title {
            font-size: 32px;
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 10px;
            text-align: center;
          }

          body {
            font-family: 'Poppins', sans-serif;
            background: #f5f9ff;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      <h2 className="doctor-title">Our Doctors</h2>
      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-img" />
            <h3>{doctor.name}</h3>
            <p>{doctor.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f5f9ff',
  }
};
