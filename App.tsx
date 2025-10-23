import React, { useState } from 'react';
import Header from './components/Header';
import TogelCard from './components/TogelCard';
import ImageViewerModal from './components/ImageViewerModal';
import WhatsAppButton from './components/WhatsAppButton';
import FloatingLogo from './components/FloatingLogo';
import { useTogelData } from './hooks/useTogelData';
import type { TogelEntry } from './types';

interface ModalData {
  imageUrl: string;
  marketName: string;
}

const App: React.FC = () => {
  const togelData: TogelEntry[] = useTogelData();
  const [selectedModalData, setSelectedModalData] = useState<ModalData | null>(null);

  const handleViewClick = (imageUrl: string, marketName: string) => {
    setSelectedModalData({ imageUrl, marketName });
  };

  const handleCloseViewer = () => {
    setSelectedModalData(null);
  };

  return (
    <div className="min-h-screen text-white font-sans flex flex-col">
      <div className="relative z-10 flex flex-col flex-grow">
        <Header />
        <main className="container mx-auto p-4 md:p-8 flex-grow">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {togelData.map((entry) => (
              <TogelCard key={entry.id} entry={entry} onViewClick={handleViewClick} />
            ))}
          </div>

          <div className="w-full max-w-2xl mx-auto p-4 md:p-6 mt-12 bg-slate-900/40 border border-slate-700/50 rounded-lg backdrop-blur-md text-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-200">
              Join Member Untuk Mendapatkan Prediksi Setiap Hari!
            </h3>
            <a
              href="https://jastipimage.com/daftar?ref_id=d2404d01"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Daftar Sekarang
            </a>
          </div>
        </main>
        
        <footer className="text-center p-4 text-gray-500 text-sm">
            © {new Date().getFullYear()} Prediksi ARJ. All rights reserved.
        </footer>

        <WhatsAppButton />
        <FloatingLogo />
      </div>
      {selectedModalData && (
        <ImageViewerModal
          imageUrl={selectedModalData.imageUrl}
          marketName={selectedModalData.marketName}
          onClose={handleCloseViewer}
        />
      )}
    </div>
  );
};

export default App;