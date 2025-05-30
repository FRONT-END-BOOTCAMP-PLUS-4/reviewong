'use client';
import React from 'react';
import UserSummary from '../../../components/UserSummary';
import { useQuery } from '@tanstack/react-query';

export default function MySummaryContainer() {
  const fetchUserProfile = async () => {
    const res = await fetch('/api/member/my');
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
    return <p>로딩 중...</p>;
  }
  if (isError) {
    return <p>에러: {(error as Error).message}</p>;
  }
  return <UserSummary userSummary={data.user} isInMy={true} />;
}
