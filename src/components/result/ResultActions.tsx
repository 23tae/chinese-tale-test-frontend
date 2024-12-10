import React from 'react';
import { Film, Share2, RotateCcw, Download } from 'lucide-react';

type ResultActionsProps = {
  mediaUrl: string;
  onShare: () => void;
  onRetake: () => void;
  onDownload: () => void;
}

const ResultActions = ({ mediaUrl, onShare, onRetake, onDownload }: ResultActionsProps) => {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4">
      <a
        href={mediaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
      >
        <Film size={20} />
        감상하기
      </a>
      <button
        onClick={onDownload}
        className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
      >
        <Download size={20} />
        저장하기
      </button>
      <button
        onClick={onShare}
        className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        <Share2 size={20} />
        공유하기
      </button>
      <button
        onClick={onRetake}
        className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
      >
        <RotateCcw size={20} />
        다시하기
      </button>
    </div>
  );
};

export default ResultActions;