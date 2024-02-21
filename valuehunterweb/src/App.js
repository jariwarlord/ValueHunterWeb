import React from 'react';
import PasswordResetForm from './PasswordResetForm'; // Import the password reset form component
import Navbar from './components/Navbar';

function App() {
  return (
    
    <div className="App">
      <Navbar></Navbar>
      <h1>Password Reset Form</h1>
      <PasswordResetForm /> {/* Render the password reset form */}
    </div>
  );
}

export default App;
