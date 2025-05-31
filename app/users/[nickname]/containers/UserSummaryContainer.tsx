'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import UserSummary from '@/app/components/UserSummary';
import UserSummarySkeleton from '@/app/components/skeletons/UserSummarySkeleton';

export default function UserSummaryContainer({ nickname }: { nickname: string }) {
  const fetchUserProfile = async () => {
    const res = await fetch(`/api/users/${nickname}`);
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || '유저 정보를 불러오지 못했습니다.');
    }
    return res.json();
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['profile'],
    queryFn: fetchUserProfile,
  });
  if (isLoading) {
    return <UserSummarySkeleton />;
  }
  if (isError) {
    return <p>에러: {(error as Error).message}</p>;
  }
  return <UserSummary userSummary={data.user} />;
}
