// ResetPassword.js
import { useParams } from 'react-router-dom';
import ResetPasswordForm from './ResetPasswordForm';

const ResetPassword = () => {
  const { email, otp } = useParams();

  return (
    <div>
      <ResetPasswordForm email={email} otp={otp} />
      
    </div>
  );
};

export default ResetPassword;
