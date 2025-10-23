import React from 'react';

const StarryBackground: React.FC = () => {
  return (
    <div id="star-bg">
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="shooting-stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
    </div>
  );
};

export default StarryBackground;