import React, { useState } from 'react';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // Şifre sıfırlama isteği gönderme işlemi burada gerçekleştirilebilir.
    // Örneğin, bir API çağrısı yapılabilir.

    // Şifre sıfırlama isteği başarıyla gönderildiğinde
    setResetSent(true);
  };

  return (
    <div>
      {resetSent ? (
        <div>
          <p>Şifrenizi sıfırlamanız için bir e-posta gönderildi. Lütfen e-postanızı kontrol edin.</p>
          {/* Kullanıcıya e-posta adresini yeniden girme seçeneği */}
          <button onClick={() => setResetSent(false)}>Başka bir e-posta gönder</button>
        </div>
      ) : (
        <form onSubmit={handleResetPassword}>
          <label>
            Enter your E-mail:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit">Reset the Password</button>
        </form>
      )}
    </div>
  );
}

export default ResetPassword;
