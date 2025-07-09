// export const generateShortUrl = (): string => {
//   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = '';
//   for (let i = 0; i < 6; i++) {
//     result += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return `https://short.ly/${result}`;
// };

// utils/api.ts
// utils/api.ts
import axios from 'axios';
import { ShortenedURL } from '../types'; // adjust path if needed

const API_BASE_URL = 'http://localhost:5000/api/v1';

export const generateShortUrl = async (originalUrl: string): Promise<ShortenedURL> => {
  const response = await axios.post<ShortenedURL>(`${API_BASE_URL}/shorten`, { originalUrl });
  return response.data;
};




export const isValidUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy text: ', error);
    return false;
  }
};

export const formatDate = (date: Date | string): string => {
  const parsed = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(parsed);
};


export const truncateUrl = (url: string, maxLength: number = 50): string => {
  if (url.length <= maxLength) return url;
  return `${url.substring(0, maxLength)}...`;
};