// ResetPassword.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ResetPasswordForm from './ResetPasswordForm';
import './ResetPassword.css';

const ResetPassword = () => {
  const { email, otp } = useParams();

  return (
    <div>
      <h2>Reset Password</h2>
      <ResetPasswordForm email={email} otp={otp} />
    </div>
  );
};

export default ResetPassword;
