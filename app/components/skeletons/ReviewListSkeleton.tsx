import React from 'react';

export default function ReviewListSkeleton() {
  return (
    <>
      <div className="shadow-sm mb-6 border rounded-lg overflow-hidden">
        <div className="flex items-center justify-between bg-gray-100 px-4 py-2">
          <div className="h-4 w-16 bg-gray-300 rounded animate-pulse" />
          <div className="h-4 w-24 bg-gray-300 rounded animate-pulse" />
        </div>
        <div className="p-4 space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded w-full animate-pulse" />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="font-bold m-5 h-10 bg-gray-200 w-32 rounded animate-pulse" />
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="border p-4 rounded-xl shadow-sm flex flex-col items-start gap-2 animate-pulse"
          >
            <div className="flex flex-row items-center gap-2 mr-2 w-full">
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div className="flex flex-col w-full gap-1">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <div className="w-20 h-4 bg-gray-200 rounded" />
                    <div className="w-12 h-4 bg-gray-200 rounded" />
                  </div>
                  <div className="w-16 h-4 bg-gray-200 rounded" />
                </div>
                <div className="w-24 h-3 bg-gray-200 rounded" />
              </div>
            </div>
            <div className="w-full space-y-2 mt-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded w-full" />
              ))}
            </div>
            <div className="flex flex-row items-center gap-4 mt-2">
              <div className="w-5 h-5 bg-gray-300 rounded-full" />
              <div className="w-5 h-4 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
