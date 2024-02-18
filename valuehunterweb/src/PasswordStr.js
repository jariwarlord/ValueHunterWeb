import React from 'react';

const PasswordStrengthMeter = ({ password }) => {
  const calculateStrength = (password) => {
    // Güçlük hesaplama algoritması buraya gelecek
    // Örneğin, uzunluk ve karakter çeşitliliği değerlendirilebilir
    // Burada sadece bir örnek verilecek, gerçek bir algoritma kullanılmalıdır
    const minLength = 8;
    const minVariety = 6; // minimum karakter çeşitliliği
    const lengthScore = Math.min(password.length / minLength, 1) * 100;
    const varietyScore = new Set(password).size >= minVariety ? 100 : 0;
    const totalScore = (lengthScore + varietyScore) / 2;
    return totalScore;
  };

  const getStrengthColor = (strength) => {
    // Şifre gücüne göre renk belirlenmesi buraya gelecek
    if (strength < 50) return 'red';
    if (strength < 75) return 'orange';
    return 'green';
  };

  const strength = calculateStrength(password);
  const strengthText = `Password strength: ${Math.round(strength)}%`;
  const strengthColor = getStrengthColor(strength);

  return (
    <p className="password-strength" style={{ color: strengthColor }}>
      {strengthText}
    </p>
  );
};

export default PasswordStrengthMeter;
