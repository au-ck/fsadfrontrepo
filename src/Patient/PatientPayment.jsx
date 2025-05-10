import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Card, CardContent, Typography, MenuItem, Snackbar, Alert } from '@mui/material';
import config from '../config';

export default function PatientPayment() {
  const [appointmentId, setAppointmentId] = useState('');
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('');
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${config.url}/payment/process`, {
        appointmentId: parseInt(appointmentId),
        amount: parseFloat(amount),
        method,
      });
      setFeedback('Payment successful!');
      setOpen(true);
      setAppointmentId('');
      setAmount('');
      setMethod('');
    } catch (err) {
      setFeedback('Payment failed!');
      setOpen(true);
      console.error(err);
    }
  };

  return (
    <Card sx={{ maxWidth: 500, mx: 'auto', mt: 4, p: 2 }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Patient Payment
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Appointment ID"
            variant="outlined"
            fullWidth
            margin="normal"
            value={appointmentId}
            onChange={(e) => setAppointmentId(e.target.value)}
            required
          />
          <TextField
            label="Amount"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <TextField
            label="Payment Method"
            select
            variant="outlined"
            fullWidth
            margin="normal"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            required
          >
            <MenuItem value="Card">Card</MenuItem>
            <MenuItem value="UPI">UPI</MenuItem>
            <MenuItem value="Net Banking">Net Banking</MenuItem>
          </TextField>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Pay Now
          </Button>
        </form>
      </CardContent>
      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity={feedback.includes('successful') ? 'success' : 'error'}>
          {feedback}
        </Alert>
      </Snackbar>
    </Card>
  );
}
