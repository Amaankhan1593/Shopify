import React from 'react';

const RotatedRect = () => {
  return (
    <svg width="180" height="130" viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
      {/* Right-most back card */}
      <rect
        x="32"
        y="18"
        width="28"
        height="38"
        rx="7"
        transform="rotate(10 46 37)"
        fill="white"
        stroke="black"
        strokeWidth="2.5"
      />

      {/* Middle card - closer to center */}
      <rect
        x="26"
        y="15"
        width="28"
        height="38"
        rx="7"
        transform="rotate(5 40 34)"
        fill="white"
        stroke="black"
        strokeWidth="2.5"
      />

      {/* Front card - straight */}
      <rect
        x="20"
        y="12"
        width="28"
        height="38"
        rx="7"
        fill="white"
        stroke="black"
        strokeWidth="2.5"
      />
    </svg>
  );
};

export default RotatedRect;
