'use client';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import MyPagination from '@/app/components/MyPagination';
import ActivityItem from '../../../components/ActivityItem';
import EmptyList from '@/app/components/EmptyList';
import { SquareChartGantt } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ActivityListSkeleton from '@/app/components/skeletons/ActivityListSkeleton';

const fetchMyReviews = async (page: number, pageSize: number) => {
  const res = await fetch(`/api/member/my/reviews?page=${page}&pageSize=${pageSize}`);
  if (!res.ok) {
    throw new Error('리뷰를 불러오는 데 실패했습니다.');
  }
  return res.json();
};

export default function MyAnsweredReviewContainer() {
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['my-reviews', page],
    queryFn: () => fetchMyReviews(page, pageSize),
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
    <>
      {totalCount === 0 ? (
        <EmptyList
          icon={<SquareChartGantt className="w-14 h-14 text-gray-300 mb-4" />}
          text="리뷰"
          midTitle="답변한 리뷰가 여기에 표시돼요"
          btnText="코드 구경하기"
          onClick={() => router.push('/codes')}
        />
      ) : (
        <>
          <div className="space-y-4">
            {reviews.map(
              (review: {
                id: number;
                codeId: number;
                codeTitle: string;
                content: string;
                createdAt: string;
                likeCount: number;
              }) => (
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
              )
            )}
          </div>
          <MyPagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      )}
    </>
  );
}
