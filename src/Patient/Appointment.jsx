import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import { useNavigate } from 'react-router-dom';

export default function Appointment() {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    doctorName: '',
    date: '',
    time: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const patientId = sessionStorage.getItem('patient_id');

  useEffect(() => {
    if (!patientId) {
      navigate('/patientlogin');
      return;
    }

    const fetchAppointments = async () => {
      try {
        const res = await axios.get(`${config.url}/patient/appointments/${patientId}`);
        setAppointments(res.data);
      } catch (err) {
        setError('Could not fetch appointments.');
        console.error(err);
      }
    };

    fetchAppointments();
  }, [patientId, navigate]);

  const handleChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!patientId) {
      setError('Please login to book appointments');
      return;
    }

    try {
      const res = await axios.post(`${config.url}/patient/appointments`, {
        ...newAppointment,
        patientId: patientId
      });

      if (res.status === 200) {
        setMessage('Appointment request sent!');
        setNewAppointment({ doctorName: '', date: '', time: '' });
        setAppointments(prev => [...prev, res.data]);
      }
    } catch (err) {
      setError('Failed to request appointment.');
      console.error(err);
    }
  };

  return (
    <div className="appointment-container container mt-4">
      <style>{`
        .appointment-container {
          background: #f9f9f9;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          font-family: 'Segoe UI', sans-serif;
        }

        h3, h4 {
          text-align: center;
          color: #004080;
          margin-bottom: 20px;
        }

        table {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
        }

        thead {
          background: #004080;
          color: white;
        }

        tbody tr:hover {
          background: #f1f1f1;
        }

        .form-group label {
          font-weight: 600;
          margin-top: 10px;
        }

        .form-control {
          border-radius: 8px;
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
        }

        .btn-primary {
          background-color: #004080;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
        }

        .btn-primary:hover {
          background-color: #003366;
        }

        .text-success, .text-danger {
          font-weight: 500;
          text-align: center;
        }
      `}</style>

      <h3>Your Appointments</h3>
      {appointments.length > 0 ? (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((app, index) => (
              <tr key={index}>
                <td>{app.doctorName}</td>
                <td>{app.date}</td>
                <td>{app.time}</td>
                <td>{app.status || 'Pending'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No appointments found.</p>
      )}

      <h4 className="mt-5">Request a New Appointment</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Doctor Name</label>
          <input
            type="text"
            name="doctorName"
            className="form-control"
            value={newAppointment.doctorName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            className="form-control"
            value={newAppointment.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <select
            name="time"
            className="form-control"
            value={newAppointment.time}
            onChange={handleChange}
            required
          >
            <option value="">Select Time</option>
            <option value="8:00 AM">8:00 AM</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
            <option value="6:00 PM">6:00 PM</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Request Appointment</button>
      </form>

      {message && <p className="text-success mt-3">{message}</p>}
      {error && <p className="text-danger mt-3">{error}</p>}
    </div>
  );
}
