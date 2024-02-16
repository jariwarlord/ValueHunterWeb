// ResetPasswordForm.js
import React, { useState } from 'react';
import axios from 'axios';
import {EyeInvisibleOutlined, EyeOutlined} from '@ant-design/icons'
// import './ResetPasswordForm.css'; // Bu dosya içe aktarıldı

const ResetPasswordForm = ({ email, otp }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [visible, setVisible] = useState(true);

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
        <label>Old Password:</label>
        <br></br>
        <input 
        type = {visible ? "text" : "password"}
        value = {newPassword}
        placeholder = "Enter Your Current Password Here" 
        onChange={(e) => setNewPassword(e.target.value)}
        required
        />
        <label>New Password:</label>
        <br></br>
        <input
          type={visible ? "text" : "password"}
          value={newPassword}
          placeholder="Enter Your Password Here"
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <br></br>
        <label>Confirm Password:</label>
        <br></br>
        <input
          type={visible ? "text" : "password"}
          value={confirmPassword}
          placeholder ="Confirm Your Password Please"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          
        />
        <div onClick={()=>setVisible(!visible)}>
          {visible ? <EyeOutlined/> : <EyeInvisibleOutlined/>}
        </div>
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <br></br>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
