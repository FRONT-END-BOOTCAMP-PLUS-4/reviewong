'use client';

import { useQuery } from '@tanstack/react-query';
import ReviewList from '../components/ReviewList';
import { ReviewView } from '@/domain/entities/ReviewView';
import { useSession } from 'next-auth/react';

export default function ReviewCommentContainer({
  codeId,
  parentId,
}: {
  codeId: number;
  parentId: number;
}) {
  const { data: session } = useSession();
  const { data, isLoading, error } = useQuery<ReviewView[]>({
    queryKey: ['comments', codeId, parentId],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/member/codes/${codeId}/reviews?parent_id=${parentId}`,
        { cache: 'no-store' }
      );
      if (!res.ok) {
        throw new Error('답글 로딩 실패');
      }
      return res.json();
    },
  });

  if (isLoading) {
    return <div className="text-gray-500 ml-8">댓글 불러오는 중...</div>;
  }
  if (data?.length === 0) {
    return;
  }
  if (error) {
    return (
      <div className="text-gray-500 ml-8">댓글을 불러오지 못했습니다. 새로고침을 해주세요!</div>
    );
  }

  return (
    <div className="ml-6">
      <ReviewList reviews={data!} codeId={codeId} isAuthor={session?.user.id ?? null} />
    </div>
  );
}
