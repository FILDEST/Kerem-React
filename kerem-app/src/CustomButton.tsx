import React from 'react';

type CustomButtonProps = {
  label: string;
  color: string; 
};

const CustomButton: React.FC<CustomButtonProps> = ({ label, color }) => {
  return (
    <button style={{ backgroundColor: color, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
      {label}
    </button>
  );
};

export default CustomButton;
