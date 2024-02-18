import React from 'react';

const PwRecMsg = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginRight: '10px', marginBottom:'10px', width:'260px', fontSize:'3px'}}>
        <p style={{ fontSize: '14px', color: '#666' }}>
          For security purposes, we recommend creating a strong password that includes at least 12 characters with a combination of uppercase letters, lowercase letters, numbers, and special characters.
        </p>
      </div>
    </div>
  );
};

export default PwRecMsg;
