'use client';

import { useQuery } from '@tanstack/react-query';
import { ReviewView } from '@/domain/entities/ReviewView';
import ReviewList from '../components/ReviewList';
import { useSession } from 'next-auth/react';
import ReviewFormContainer from './ReviewFormContainer';

export default function LatestReviewListContainer({ codeId }: { codeId: number }) {
  const { data: session } = useSession();
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery<ReviewView[]>({
    queryKey: ['latest-reviews', codeId],
    queryFn: async () => {
      const res = await fetch(`/api/codes/${codeId}/latest_reviews`, {
        cache: 'no-store',
      });
      if (!res.ok) {
        throw new Error('최근 리뷰 조회 실패');
      }
      return res.json();
    },
  });

  if (isLoading || !reviews) {
    return <div>리뷰 불러오는 중...</div>;
  }

  return (
    <>
      <ReviewFormContainer codeId={codeId} onDone={() => refetch()} />
      <ReviewList
        reviews={reviews}
        codeId={codeId}
        isAuthor={session?.user?.id ?? null}
        showInteractions={false}
      />
    </>
  );
}
