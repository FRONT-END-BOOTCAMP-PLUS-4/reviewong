'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import UserReviewHeatmapSkeleton from '@/app/components/skeletons/UserReviewHeatmapSkeleton';
import UserReviewHeatmap from '@/app/components/UserReviewHeatmap';

export default function MyReviewHeatmapContainer() {
  const fetchUserHeatMapProfile = async () => {
    const res = await fetch('/api/member/my/review_counts');
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || '히트맵 정보를 불러오지 못했습니다.');
    }
    return res.json();
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['heatmapProfile'],
    queryFn: fetchUserHeatMapProfile,
  });
  if (isLoading) {
    return <UserReviewHeatmapSkeleton />;
  }
  if (isError) {
    return <p>에러: {(error as Error).message}</p>;
  }
  return (
    <div className="max-w-4xl mx-auto mb-6 p-6 bg-white rounded-2xl shadow border">
      <h1 className="font-bold text-xl mb-2">활동 기록</h1>
      <p className="text-gray-400 text-sm mb-2">지난 날의 리뷰 기록을 확인해 보세요!</p>
      <UserReviewHeatmap reviewCounts={data.reviewHeatmap} />
    </div>
  );
}
