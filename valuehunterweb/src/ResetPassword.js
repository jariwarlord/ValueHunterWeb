import { useParams } from 'react-router-dom';
import ResetPasswordForm from './ResetPasswordForm';
import axios from 'axios';

const ResetPassword = () => {
  const { email, otp } = useParams();

  const handleFormSubmit = async (oldPassword, newPassword, confirmPassword) => {
    try {
      if (newPassword !== confirmPassword) {
        throw new Error('Passwords do not match.');
      }
      const response = await axios.post('/reset-password', {
        email,
        otp,
        oldPassword,
        newPassword,
      });
      return response.data.message;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  };

  return (
    <div>
      <ResetPasswordForm 
        email={email} 
        otp={otp} 
        onSubmit={handleFormSubmit} 
      />
    </div>
  );
};

export default ResetPassword;
