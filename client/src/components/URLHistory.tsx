


import React from 'react';
import { Copy, ExternalLink, Trash2, Calendar, BarChart3 } from 'lucide-react';
import { ShortenedURL } from '../types';
import { copyToClipboard, formatDate, truncateUrl } from '../utils';

interface URLHistoryProps {
  urls: ShortenedURL[];
  onDelete: (id: string) => void;
  onShowToast: (message: string, type: 'success' | 'error') => void;
}

const URLHistory: React.FC<URLHistoryProps> = ({ urls, onDelete, onShowToast }) => {
  const handleCopy = async (url: string) => {
    const success = await copyToClipboard(url);
    if (success) {
      onShowToast('Copied to clipboard!', 'success');
    } else {
      onShowToast('Failed to copy URL', 'error');
    }
  };

  const handleDelete = (id: string) => {
    onDelete(id);
    onShowToast('URL deleted successfully', 'success');
  };

  if (!urls || urls.length === 0) {
    return (
      <div className="max-w-6xl mx-auto mt-12">
        <div className="text-center py-12">
          <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No URLs shortened yet</h3>
          <p className="text-gray-500">Start by shortening your first URL above</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <h2 className="text-2xl font-bold">URL History</h2>
          <p className="text-blue-100">Manage your shortened URLs</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Original URL
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Short URL
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Clicks
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {urls.map((url) => (
                <tr key={url.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <ExternalLink className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {truncateUrl(String(url.originalUrl ?? ''), 60)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {url.originalUrl ? new URL(url.originalUrl).hostname : 'Invalid URL'}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-mono text-blue-600">
                      {String(url.shortUrl ?? '')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(url.createdAt)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <BarChart3 className="w-4 h-4 mr-1" />
                      {url.clicks ?? 0}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleCopy(url.shortUrl)}
                        className="text-blue-600 hover:text-blue-900 transition-colors p-2 rounded-lg hover:bg-blue-50"
                        title="Copy short URL"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleCopy(url.originalUrl)}
                        className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-50"
                        title="Copy original URL"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(url.id)}
                        className="text-red-600 hover:text-red-900 transition-colors p-2 rounded-lg hover:bg-red-50"
                        title="Delete URL"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default URLHistory;
