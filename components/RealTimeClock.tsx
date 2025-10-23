import React, { useState, useEffect } from 'react';

const RealTimeClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    // Mengganti titik dengan spasi untuk format waktu yang lebih bersih
    return date.toLocaleDateString('id-ID', options);
  };

  const formatTime = (date: Date) => {
    // Memastikan format jam menggunakan titik sebagai pemisah, sesuai standar umum di Indonesia
    return date.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).replace(/\./g, ':');
  };

  return (
    <div className="text-center text-xs sm:text-sm text-gray-300 mt-1 font-mono tracking-wider">
      <p>{formatDate(currentTime)} | {formatTime(currentTime)} WIB</p>
    </div>
  );
};

export default RealTimeClock;
