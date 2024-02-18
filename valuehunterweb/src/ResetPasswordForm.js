import React, { useState } from 'react';
import axios from 'axios';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

const ResetPasswordForm = ({ email, otp }) => {
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [visibleNew, setVisibleNew] = useState(true);
  const [visibleOld, setVisibleOld] = useState(true);
  const [visibleConfirm, setVisibleConfirm] = useState(true);

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

  const togglePasswordVisibilityNew = () => {
    setVisibleNew(!visibleNew);
  };

  const togglePasswordVisibilityOld = () => {
    setVisibleOld(!visibleOld);
  };

  const togglePasswordVisibilityConfirm = () => {
    setVisibleConfirm(!visibleConfirm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Old Password:</label>
        <br />
        <div style={{ position: 'relative' }}>
          <input
            type={visibleOld ? "text" : "password"}
            value={oldPassword}
            placeholder="Enter Your Current Password Here"
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
          <div
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-60%)',
              cursor: 'pointer'
            }}
            onClick={togglePasswordVisibilityOld}
          >
            {visibleOld ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
        </div>
        <label>New Password:</label>
        <br />
        <div style={{ position: 'relative' }}>
          <input
            type={visibleNew ? "text" : "password"}
            value={newPassword}
            placeholder="Enter Your Password Here"
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <div
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-60%)',
              cursor: 'pointer'
            }}
            onClick={togglePasswordVisibilityNew}
          >
            {visibleNew ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
        </div>
        <br />
        <label>Confirm Password:</label>
        <br />
        <div style={{ position: 'relative' }}>
          <input
            type={visibleConfirm ? "text" : "password"}
            value={confirmPassword}
            placeholder="Confirm Your Password Please"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <div
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-60%)',
              cursor: 'pointer'
            }}
            onClick={togglePasswordVisibilityConfirm}
          >
            {visibleConfirm ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <br />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
