import React from 'react';

export const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-[--card-bg] border border-[--border-color] rounded-lg p-6 animate-pulse">
      <div className="h-6 bg-[--border-color] rounded w-3/4 mb-4"></div>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="h-4 bg-[--border-color] rounded w-1/4"></div>
          <div className="h-10 bg-[--border-color] rounded"></div>
        </div>
        <div className="h-10 bg-[--primary-color]/20 rounded w-full"></div>
      </div>
    </div>
  );
};