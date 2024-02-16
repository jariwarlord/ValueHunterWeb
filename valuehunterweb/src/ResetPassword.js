import React, { useState } from 'react';
import './ResetPassword.css'; // ResetPassword.css dosyasını içe aktar

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // Email formatını kontrol et
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Şifre sıfırlama isteği gönderme işlemi burada gerçekleştirilebilir.
    // Örneğin, bir API çağrısı yapılabilir.

    // Şifre sıfırlama isteği başarıyla gönderildiğinde
    setResetSent(true);
  };

  return (
    <div className="reset-password">
      {resetSent ? (
        <div className="reset-password__success">
          <p>An email has been sent to reset your password. Please check your email.</p>
          {/* Kullanıcıya e-posta adresini yeniden girme seçeneği */}
          <button onClick={() => setResetSent(false)}>Send another email</button>
        </div>
      ) : (
        <form className="reset-password__form" onSubmit={handleResetPassword}>
          <h2>Reset Your Password</h2>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
}

export default ResetPassword;
