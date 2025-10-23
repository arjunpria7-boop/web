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
    marketName: 'TOTO MACAU P1',
    closingTime: '13:00 WIB',
    result: '3456',
    imageUrl: 'https://i.ibb.co/P9tLhvy/macau.png',
  },
  {
    id: 5,
    marketName: 'TOTO MACAU P2',
    closingTime: '16:00 WIB',
    result: '7890',
    imageUrl: 'https://i.ibb.co/P9tLhvy/macau.png',
  },
  {
    id: 6,
    marketName: 'TOTO MACAU P3',
    closingTime: '19:00 WIB',
    result: '1234',
    imageUrl: 'https://i.ibb.co/P9tLhvy/macau.png',
  },
  {
    id: 7,
    marketName: 'TOTO MACAU P4',
    closingTime: '22:00 WIB',
    result: '5678',
    imageUrl: 'https://i.ibb.co/P9tLhvy/macau.png',
  },
  {
    id: 8,
    marketName: 'TOTO MACAU P5',
    closingTime: '00:00 WIB',
    result: '7890',
    imageUrl: 'https://i.ibb.co/P9tLhvy/macau.png',
  },
  {
    id: 9,
    marketName: 'TOTO MACAU P6',
    closingTime: '21:00 WIB',
    result: '1234',
    imageUrl: 'https://i.ibb.co/P9tLhvy/macau.png',
  },
];

/**
 * Custom hook to provide static Togel data.
 * In a real application, this might fetch data from an API.
 */
export const useTogelData = (): TogelEntry[] => {
  return DUMMY_TOGEL_DATA;
};