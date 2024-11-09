import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 bg-green-500 rounded-lg text-white text-lg font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
