import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config'; // Make sure this is the right path

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');
  const doctorName = sessionStorage.getItem('doctor_name'); // Not ID!

  useEffect(() => {
    if (doctorName) {
      axios.get(`${config.url}/doctor/appointments/${doctorName}`)
        .then(res => {
          setAppointments(res.data);
        })
        .catch(err => {
          setError('Could not fetch appointments.');
          console.error(err);
        });
    } else {
      setError('Doctor name not found in session.');
    }
  }, [doctorName]);

  const updateStatus = (id, status) => {
    axios.post(`${config.url}/doctor/updateAppointmentStatus`, { id, status })
      .then(() => {
        setAppointments(prev =>
          prev.map(app =>
            app.id === id ? { ...app, status } : app
          )
        );
      })
      .catch(err => {
        console.error('Failed to update appointment:', err);
        alert('Error updating status');
      });
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Appointments with Patients</h3>

      {appointments.length > 0 ? (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((app, index) => (
              <tr key={index}>
                <td>{app.patientName}</td>
                <td>{app.date}</td>
                <td>{app.time}</td>
                <td>{app.status || 'Pending'}</td>
                <td>
                  {app.status === 'Pending' && (
                    <>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => updateStatus(app.id, 'Approved')}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => updateStatus(app.id, 'Rejected')}
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">{error || 'No appointments found.'}</p>
      )}
    </div>
  );
}