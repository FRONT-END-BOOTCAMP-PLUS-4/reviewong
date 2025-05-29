'use client';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import MyPagination from '@/app/components/MyPagination';
import MyActivityItem from '../components/MyActivityItem';

const fetchMyReviews = async (page: number, pageSize: number) => {
  const res = await fetch(`/api/member/my/reviews?page=${page}&pageSize=${pageSize}`);
  if (!res.ok) {
    throw new Error('리뷰를 불러오는 데 실패했습니다.');
  }
  return res.json();
};

export default function MyAnsweredReviewContainer({ isActive }: { isActive: boolean }) {
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['my-reviews', page],
    queryFn: () => fetchMyReviews(page, pageSize),
    enabled: isActive,
    placeholderData: (prev) => prev, // 페이지 변경 시 이전 데이터를 유지
    staleTime: 1000 * 60,
  });

  if (!isActive) {
    return null;
  }
  if (isLoading) {
    return <p>로딩 중...</p>;
  }
  if (isError || !data) {
    return <p>리뷰를 불러오는 데 실패했습니다.</p>;
  }

  const { reviews, totalCount } = data;
  const totalPages = Math.ceil(totalCount / pageSize);
  return (
    <>
      <div className="space-y-4">
        {reviews.map((review: any) => (
          <MyActivityItem
            key={review.id}
            codeId={review.codeId}
            title={review.codeTitle}
            content={review.content}
            createdAt={review.createdAt}
            likeCount={review.likeCount}
          />
        ))}
      </div>
      <MyPagination page={page} totalPages={totalPages} setPage={setPage} />
    </>
  );
}
