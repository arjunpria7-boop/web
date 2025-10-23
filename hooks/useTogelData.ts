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
    imageUrl: 'https://i.ibb.co/6yYJc1g/sydney.png',
  },
  {
    id: 2,
    marketName: 'SINGAPORE',
    closingTime: '17:45 WIB',
    result: '5678',
    imageUrl: 'https://i.ibb.co/M8mYfXb/singapore.png',
  },
  {
    id: 3,
    marketName: 'HONGKONG',
    closingTime: '23:00 WIB',
    result: '9012',
    imageUrl: 'https://i.postimg.cc/JhQvYbyQ/IMG-20251023-WA0000.jpg',
  },
  {
    id: 4,
    marketName: 'TOTO MACAU',
    closingTime: 'Setiap Hari',
    result: '3456',
    imageUrl: 'https://i.ibb.co/P9tLhvy/macau.png',
  },
  {
    id: 5,
    marketName: 'CAMBODIA',
    closingTime: '11:50 WIB',
    result: '7890',
    imageUrl: 'https://i.ibb.co/N1X6f5B/cambodia.png',
  },
  {
    id: 6,
    marketName: 'CHINA',
    closingTime: '15:30 WIB',
    result: '1234',
    imageUrl: 'https://i.ibb.co/hZ5yF7V/china.png',
  },
];

/**
 * Custom hook to provide static Togel data.
 * In a real application, this might fetch data from an API.
 */
export const useTogelData = (): TogelEntry[] => {
  return DUMMY_TOGEL_DATA;
};