'use client';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import MyPagination from '@/app/components/MyPagination';
import EmptyList from '@/app/components/EmptyList';
import { SquareChartGantt } from 'lucide-react';
import ActivityListSkeleton from '@/app/components/skeletons/ActivityListSkeleton';
import ActivityItem from '@/app/components/ActivityItem';

const fetchUserReviews = async (nickname: string, page: number, pageSize: number) => {
  const res = await fetch(`/api/users/${nickname}/reviews?page=${page}&pageSize=${pageSize}`);
  if (!res.ok) {
    throw new Error('리뷰를 불러오는 데 실패했습니다.');
  }
  return res.json();
};

export default function UserAnsweredReviewContainer({ nickname }: { nickname: string }) {
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;
  const { data, isLoading, isError } = useQuery({
    queryKey: ['my-reviews', page],
    queryFn: () => fetchUserReviews(nickname, page, pageSize),
    staleTime: 1000 * 60,
  });

  if (isLoading) {
    return <ActivityListSkeleton />;
  }
  if (isError || !data) {
    return <p>리뷰를 불러오는 데 실패했습니다.</p>;
  }

  const { reviews, totalCount } = data;
  const totalPages = Math.ceil(totalCount / pageSize);
  return (
    <div>
      {totalCount === 0 ? (
        <EmptyList
          icon={<SquareChartGantt className="w-14 h-14 text-gray-300 mb-4" />}
          text="코드"
        />
      ) : (
        <>
          <div className="space-y-4">
            {reviews.map((review: any) => (
              <ActivityItem
                key={review.id}
                codeId={review.codeId}
                title={
                  <>
                    {review.codeTitle}{' '}
                    <span className="font-light text-base text-gray-400">에 남긴 리뷰</span>
                  </>
                }
                content={review.content}
                createdAt={review.createdAt}
                likeCount={review.likeCount}
              />
            ))}
          </div>
          <MyPagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      )}
    </div>
  );
}
