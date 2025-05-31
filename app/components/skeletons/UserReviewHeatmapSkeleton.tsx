'use client';
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function UserReviewHeatmapSkeleton() {
  const createSkeletonCells = () => {
    const cells = [];
    const totalCells = 280;

    for (let i = 0; i < totalCells; i++) {
      cells.push(<Skeleton key={i} className="w-[17px] h-[17px] rounded-sm" />);
    }

    return cells;
  };

  return (
    <div className="max-w-4xl mx-auto mb-6 p-6 bg-white rounded-2xl shadow border">
      {/* 제목과 설명 스켈레톤 */}
      <div className="mb-4">
        <Skeleton className="h-7 w-20 mb-2" />
        <Skeleton className="h-4 w-64" />
      </div>

      {/* 히트맵 영역 */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          {/* 월 라벨 영역 */}
          <div className="flex gap-10 mb-2 px-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <Skeleton key={index} className="h-4 w-6" />
            ))}
          </div>

          <div className="flex">
            {/* 히트맵 그리드 */}
            <div
              className="grid gap-[2px]"
              style={{
                gridTemplateColumns: 'repeat(43, 17px)',
                gridTemplateRows: 'repeat(7, 17px)',
              }}
            >
              {createSkeletonCells()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
