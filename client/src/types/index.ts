export interface ShortenedURL {
  urlCode: any;
  id: string;
  originalUrl: string;
  shortUrl: string;
  createdAt: Date;
  clicks: number;
}

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}