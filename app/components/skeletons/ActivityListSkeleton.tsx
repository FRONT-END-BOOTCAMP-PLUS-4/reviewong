'use client';
import { Skeleton } from '@/components/ui/skeleton';

export default function ActivityListSkeleton() {
  const dummyArray = Array.from({ length: 10 });

  return (
    <div className="space-y-4">
      {dummyArray.map((_, index) => (
        <div
          key={index}
          className="p-4 border rounded-2xl shadow-sm bg-white space-y-2 animate-pulse"
        >
          <div className="flex items-center space-x-2">
            <Skeleton className="w-40 h-4" />
          </div>
          <Skeleton className="w-full h-16 rounded-md" />
          <div className="flex justify-between items-center mt-2">
            <Skeleton className="w-24 h-6.5" />
            <Skeleton className="w-12 h-6.5" />
          </div>
        </div>
      ))}
    </div>
  );
}
