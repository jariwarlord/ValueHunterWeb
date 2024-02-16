// ResetPasswordForm.js
import React, { useState } from 'react';
import axios from 'axios';
// import './ResetPasswordForm.css'; // Bu dosya içe aktarıldı

const ResetPasswordForm = ({ email, otp }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newPassword !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      const response = await axios.post('/reset-password', {
        email,
        otp,
        newPassword,
      });
      setSuccessMessage(response.data.message);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>New Password:</label>
        <br></br>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <br></br>
        <label>Confirm Password:</label>
        <br></br>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <br></br>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
