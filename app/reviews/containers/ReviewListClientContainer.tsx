'use client';

import { useState } from 'react';
import { ReviewView } from '@/domain/entities/ReviewView';
import ReviewList from '../components/ReviewList';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import ReviewFormContainer from './ReviewFormContainer';

interface Props {
  codeId: number;
  initialReviews: ReviewView[]; // ssr 형식 초기 데이터
}

export default function ReviewListClientContainer({ codeId, initialReviews }: Props) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [editingReview, setEditingReview] = useState<{ id: number }>();
  const { data: session } = useSession();

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error('리뷰 삭제 실패');
      }
      // 리뷰 삭제 후 refetch
      refetch();
    } catch (error) {
      console.error('리뷰 삭제 중 오류 발생:', error);
      alert('리뷰 삭제에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const {
    data: reviews,
    refetch,
    isLoading,
  } = useQuery<ReviewView[]>({
    queryKey: ['reviews', codeId],
    queryFn: async () => {
      const res = await fetch(`/api/member/codes/${codeId}/reviews`, {
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
          Authorization: session ? `Bearer ${session.user.id}` : '',
        },
      });
      if (!res.ok) {
        throw new Error('리뷰 조회 실패');
      }
      return res.json();
    },
    initialData: initialReviews,
  });

  if (isLoading || !reviews) {
    return <div>리뷰 불러오는 중...</div>;
  }

  // (reviews)리뷰 데이터에서 좋아요 상태에 따라 delete, create 동작
  const handleLike = async (id: number, isLiked: boolean, authorId: string) => {
    try {
      const res = await fetch(`/api/reviews/${id}/review_likes`, {
        method: isLiked ? 'DELETE' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: session ? `Bearer ${session.user.id}` : '',
        },
        body: JSON.stringify({ authorId }),
      });

      if (!res.ok) {
        throw new Error('리뷰 좋아요 실패');
      }

      refetch(); // 상태 갱신
    } catch (error) {
      console.error('리뷰 좋아요 중 오류 발생:', error);
      alert('리뷰 좋아요에 실패했습니다. 다시 시도해주세요.');
    }
  };
  return (
    <>
      <ReviewFormContainer
        codeId={codeId}
        onDone={() => {
          refetch();
        }}
      />

      <ReviewList
        reviews={reviews}
        codeId={codeId}
        parentId={expandedId}
        onClickLike={handleLike}
        onExpandClick={(id) => setExpandedId((prev) => (prev === id ? null : id))}
        onEditClick={(id) => setEditingReview({ id })}
        editingReviewId={editingReview?.id}
        onDeleteClick={handleDelete}
        onReload={refetch}
        commentButton
        isAuthor={session?.user.id ?? null}
      />
    </>
  );
}
