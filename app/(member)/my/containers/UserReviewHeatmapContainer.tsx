'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import UserReviewHeatmap from '../components/UserReviewHeatmap';

export default function UserReviewHeatmapContainer() {
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
    return <p>로딩 중...</p>;
  }
  if (isError) {
    return <p>에러: {(error as Error).message}</p>;
  }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow border">
      <UserReviewHeatmap reviewCounts={data.reviewHeatmap} />
    </div>
  );
}
