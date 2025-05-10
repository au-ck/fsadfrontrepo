import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PatientLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');

  const navigate = useNavigate();
  const { setIsPatientLoggedIn } = useAuth();

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const alpha = [
      'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
      'S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0',
      'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r',
      's','t','u','v','w','x','y','z','!','@','#','$','%','^','&','*','+'
    ];
    let cap = '';
    for (let i = 0; i < 6; i++) {
      cap += alpha[Math.floor(Math.random() * alpha.length)];
    }
    setCaptcha(cap);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCaptchaInputChange = (e) => {
    setCaptchaInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (captchaInput !== captcha) {
      setError("Captcha does not match. Please try again.");
      generateCaptcha();
      return;
    }

    try {
      const response = await axios.post(`${config.url}/patient/checkpatientlogin`, formData);
      if (response.status === 200) {
        // Store patient data in sessionStorage
        sessionStorage.setItem('patient_id', response.data.id);
        sessionStorage.setItem('patient_name', response.data.name);
        
        setIsPatientLoggedIn(true);
        navigate("/patienthome");
      } else {
        setMessage(response.data);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h3 className="text-center text-decoration-underline mb-4">Patient Login</h3>
      {message && <p className="text-center text-success fw-bold">{message}</p>}
      {error && <p className="text-center text-danger fw-bold">{error}</p>}
      
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" id="username" className="form-control" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" id="password" className="form-control" value={formData.password} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Captcha</label>
          <div className="d-flex justify-content-between align-items-center">
            <input type="text" className="form-control me-2" value={captcha} readOnly style={{ maxWidth: '60%' }} />
            <button type="button" className="btn btn-secondary" onClick={generateCaptcha}>↻</button>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Enter Captcha</label>
          <input type="text" className="form-control" value={captchaInput} onChange={handleCaptchaInputChange} required />
        </div>

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}