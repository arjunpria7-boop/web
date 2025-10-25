import React from 'react';
import RealTimeClock from './RealTimeClock';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm p-4 sticky top-0 z-10 shadow-lg shadow-purple-500/10">
      <div className="container mx-auto flex justify-center items-center relative min-h-[4rem]">
        {/* Left Animation */}
        <div className="absolute left-0 md:left-4 flex items-center space-x-2 opacity-0 md:opacity-80 pointer-events-none">
            <div className="w-1 h-4 bg-purple-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
            <div className="w-1 h-6 bg-pink-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
            <div className="w-1 h-3 bg-purple-500 rounded-full animate-pulse"></div>
        </div>

        <div className="flex flex-col items-center">
            <div className="flex items-center gap-3">
              <img src="https://i.postimg.cc/hjqy34TJ/logo-ARJ-2-removebg-preview.png" alt="ARJ Logo" className="h-8 md:h-10" />
              <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Prediksi ARJ
              </h1>
            </div>
            <RealTimeClock />
        </div>

        {/* Right Animation */}
        <div className="absolute right-0 md:right-4 flex items-center space-x-2 opacity-0 md:opacity-80 pointer-events-none">
            <div className="w-1 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-1 h-6 bg-pink-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
            <div className="w-1 h-4 bg-purple-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
