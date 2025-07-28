import React from 'react';

const LadybugIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className}
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#FF0000"
      d="M50 20c-16.57 0-30 13.43-30 30s13.43 30 30 30 30-13.43 30-30-13.43-30-30-30zm0 55c-13.81 0-25-11.19-25-25s11.19-25 25-25 25 11.19 25 25-11.19 25-25 25z"
    />
    <circle cx="35" cy="45" r="5" fill="#000000" />
    <circle cx="65" cy="45" r="5" fill="#000000" />
    <path
      fill="#000000"
      d="M50 20c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
    />
  </svg>
);

export default LadybugIcon;
