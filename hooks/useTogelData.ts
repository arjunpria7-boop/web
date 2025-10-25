import type { TogelEntry } from '../types';

// FIX: Create a concrete implementation for the useTogelData hook.
// The previous content was a placeholder string, causing build errors.
// This hook now returns a static array of Togel data.
const DUMMY_TOGEL_DATA: TogelEntry[] = [
  {
    id: 1,
    marketName: 'SYDNEY',
    closingTime: '13:50 WIB',
    result: '1234',
    imageUrl: 'https://i.postimg.cc/MKJSfxfg/download-2.png',
  },
  {
    id: 2,
    marketName: 'SINGAPORE',
    closingTime: '17:45 WIB',
    result: '5678',
    imageUrl: 'https://i.postimg.cc/g0jFb21J/download-9.png',
  },
  {
    id: 3,
    marketName: 'HONGKONG',
    closingTime: '23:00 WIB',
    result: '9012',
    imageUrl: 'https://i.postimg.cc/Nfc3f4Wg/download-10.png',
  },
  {
    id: 4,
    marketName: 'TOTO MACAU 00',
    closingTime: '00:00 WIB',
    result: '7890',
    imageUrl: 'https://i.postimg.cc/TwZpWSrM/download.png',
  },
  {
    id: 5,
    marketName: 'TOTO MACAU 13',
    closingTime: '13:00 WIB',
    result: '3456',
    imageUrl: 'https://i.postimg.cc/Lsn700Z3/download-3.png',
  },
  {
    id: 6,
    marketName: 'TOTO MACAU 16',
    closingTime: '16:00 WIB',
    result: '7890',
    imageUrl: 'https://i.postimg.cc/Xq79QtrN/download-5.png',
  },
  {
    id: 7,
    marketName: 'TOTO MACAU 19',
    closingTime: '19:00 WIB',
    result: '1234',
    imageUrl: 'https://i.postimg.cc/g2RLqGgZ/download-6.png',
  },
  {
    id: 8,
    marketName: 'TOTO MACAU 22',
    closingTime: '22:00 WIB',
    result: '5678',
    imageUrl: 'https://i.postimg.cc/prTnD8SW/download-7.png',
  },
  {
    id: 9,
    marketName: 'TOTO MACAU 23',
    closingTime: '23:00 WIB',
    result: '1234',
    imageUrl: 'https://i.postimg.cc/fTPYf2ZC/download-8.png',
  },
];

/**
 * Custom hook to provide static Togel data.
 * In a real application, this might fetch data from an API.
 */
export const useTogelData = (): TogelEntry[] => {
  return DUMMY_TOGEL_DATA;
};