import React, { useEffect, useState } from 'react';
import { supabase } from './supabase'; // Supabase instance

function PasswordResetForm() {
  const [newPassword, setNewPassword] = useState('');
  const [resetTokens, setResetTokens] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [authListener, setAuthListener] = useState(null);

  useEffect(() => {
    // Listen for PASSWORD_RECOVERY event
    const listener = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" && session) {
        // Parse URL fragments to extract tokens
        const { access_token, refresh_token, type, expires_in } = session;
        setResetTokens({ access_token, refresh_token, type, expires_in });
      }
    });

    setAuthListener(listener);

    return () => {
      // Clean up listener
      if (authListener) {
        authListener.data.unsubscribe();
      }
    };
  }, [authListener]);

  const handlePasswordReset = async () => {
    try {
      const { error } = await supabase.auth.updateUser({
        access_token: resetTokens?.access_token,
        password: newPassword
      });

      if (error) {
        setError(error.message);
        console.log("Hatalı!")
      } else {
        setSuccessMessage("Password updated successfully!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      
      {resetTokens ? (
        <>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={handlePasswordReset}>Reset Password</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </>
      ) : (
        <p>No password reset request found. Please initiate a password reset process.</p>
      )}
    </div>
  );
}

export default PasswordResetForm;
