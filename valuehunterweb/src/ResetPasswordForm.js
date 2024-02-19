// import React, { useState } from 'react';
// import axios from 'axios';
// import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
// import { supabase } from './supabaseClient'; // Supabase client'ı import et
// import PasswordStrengthMeter from './PasswordStr';
// import PwRecMsg from './PwRecMsg';

// const ResetPasswordForm = ({ email, otp }) => {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [visible, setVisible] = useState(true);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (newPassword !== confirmPassword) {
//         setError('Passwords do not match.');
//         return;
//       }

//       // Reset password for email
//       const { error } = await supabase.auth.resetPasswordForEmail(email);
//       if (error) {
//         throw new Error('Error sending password reset email');
//       }

//       setSuccessMessage('Password reset email sent successfully!');
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setVisible(!visible);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>New Password:</label>
//         <br />
//         <div style={{ position: 'relative' }}>
//           <input
//             type={visible ? "text" : "password"}
//             value={newPassword}
//             placeholder="Enter Your Password Here"
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//           />
//           <div
//             style={{
//               position: 'absolute',
//               right: '10px',
//               top: '50%',
//               transform: 'translateY(-60%)',
//               cursor: 'pointer'
//             }}
//             onClick={togglePasswordVisibility}
//           >
//             {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
//           </div>
//         </div>
//         <br />
//         <label>Confirm Password:</label>
//         <br />
//         <div style={{ position: 'relative' }}>
//           <input
//             type={visible ? "text" : "password"}
//             value={confirmPassword}
//             placeholder="Confirm Your Password Please"
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           <div
//             style={{
//               position: 'absolute',
//               right: '10px',
//               top: '50%',
//               transform: 'translateY(-60%)',
//               cursor: 'pointer'
//             }}
//             onClick={togglePasswordVisibility}
//           >
//             {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
//           </div>
//         </div>
//         {error && <p className="error">{error}</p>}
//         {successMessage && <p className="success">{successMessage}</p>}
//         <br />
//         <PwRecMsg/>
//         <button type="submit">Reset Password</button>
//         <PasswordStrengthMeter password={newPassword} setNewPassword={setNewPassword} />
//       </form>
//     </div>
//   );
// };

// export default ResetPasswordForm;
