import React from 'react';

const FloatingLogo: React.FC = () => {
  const logoUrl = "https://i.postimg.cc/XvKCmg0n/edited-image-1-removebg-preview.png";

  return (
    <a
      href="https://arj.co.id"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed -bottom-4 left-6 z-20 transition-transform transform hover:scale-110"
      aria-label="ARJ Official Site"
    >
      <img
        src={logoUrl}
        alt="ARJ Logo"
        className="w-28 h-28 animate-[slow-pulse_4s_ease-in-out_infinite]"
      />
    </a>
  );
};

export default FloatingLogo;
