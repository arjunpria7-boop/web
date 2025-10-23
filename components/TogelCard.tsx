import React from 'react';
import type { TogelEntry } from '../types';

interface TogelCardProps {
  entry: TogelEntry;
  onViewClick: (imageUrl: string, marketName: string) => void;
}

const TogelCard: React.FC<TogelCardProps> = ({ entry, onViewClick }) => {
  return (
    <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/40 transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img src={entry.imageUrl} alt={entry.marketName} className="w-full h-48 object-cover object-top" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onViewClick(entry.imageUrl, entry.marketName)}
            className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-700 transition-colors"
          >
            View
          </button>
        </div>
      </div>
      <div className="p-4 flex flex-col items-center text-center">
        <h3 className="text-xl font-bold text-purple-400">{entry.marketName}</h3>
        <p className="text-gray-300 mt-2">
          <span className="font-semibold">Tutup:</span> {entry.closingTime}
        </p>
      </div>
    </div>
  );
};

export default TogelCard;