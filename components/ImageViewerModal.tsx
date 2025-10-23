import React from 'react';

interface ImageViewerModalProps {
  imageUrl: string;
  marketName: string;
  onClose: () => void;
}

const ImageViewerModal: React.FC<ImageViewerModalProps> = ({ imageUrl, marketName, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-4xl max-h-full bg-slate-900/50 backdrop-blur-md rounded-lg p-4"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image container
      >
        <h3 className="text-xl font-bold text-center text-purple-400 mb-4">Prediksi {marketName}</h3>
        <img src={imageUrl} alt={`Enlarged view for ${marketName}`} className="block max-h-[80vh] max-w-full rounded-lg shadow-2xl" />
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Close image viewer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageViewerModal;