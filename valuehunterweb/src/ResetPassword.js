// ResetPassword.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ResetPasswordForm from './ResetPasswordForm';
import PasswordStrengthMeter from './PasswordStr';

const ResetPassword = () => {
  const { email, otp } = useParams();
  const [newPassword, setNewPassword] = useState(''); // newPassword değişkenini burada tanımlayın

  return (
    <div>
      {/* Şifre gücü bileşenini burada çağırın */}
      <ResetPasswordForm email={email} otp={otp} />
      <PasswordStrengthMeter password={newPassword} setNewPassword={setNewPassword} />

    </div>
  );
};

export default ResetPassword;
