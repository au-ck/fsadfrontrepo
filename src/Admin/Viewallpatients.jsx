import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import config from '../config';

export default function Viewallpatients() {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`${config.url}/admin/allpatients`)
      .then(res => {
        setPatients(res.data);
      })
      .catch(err => {
        toast.error('Failed to fetch patients.');
        setError('Unable to load patients.');
        console.error(err);
      });
  }, []);

  return (
    <div className="container mt-4 view-patients-container">
      <style>{`
        .view-patients-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f4f9ff;
          padding: 20px;
          border-radius: 10px;
        }

        h3 {
          color: #003366;
          font-weight: 600;
        }

        .table {
          background: white;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          border-radius: 8px;
          overflow: hidden;
        }

        .table th {
          background-color: #004080;
          color: white;
          text-align: center;
        }

        .table td {
          vertical-align: middle;
          text-align: center;
        }

        .table-hover tbody tr:hover {
          background-color: #e6f2ff;
        }

        p.text-center {
          font-size: 18px;
          color: #555;
          margin-top: 30px;
        }
      `}</style>

      <ToastContainer position="top-center" autoClose={3000} />
      <h3 className="text-center mb-4">All Registered Patients</h3>

      {patients.length > 0 ? (
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Mobile</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td>{patient.email}</td>
                <td>{patient.username}</td>
                <td>{patient.gender}</td>
                <td>{patient.dob}</td>
                <td>{patient.mobile}</td>
                <td>{patient.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">{error || 'No patients found.'}</p>
      )}
    </div>
  );
}
