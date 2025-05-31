'use client';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import MyPagination from '@/app/components/MyPagination';
import EmptyList from '@/app/components/EmptyList';
import { Code } from 'lucide-react';
import ActivityListSkeleton from '@/app/components/skeletons/ActivityListSkeleton';
import ActivityItem from '@/app/components/ActivityItem';

const fetchUserCodes = async (nickname: string, page: number, pageSize: number) => {
  const res = await fetch(`/api/users/${nickname}/codes?page=${page}&pageSize=${pageSize}`);
  return res.json();
};

export default function UserWrittenCodeContainer({ nickname }: { nickname: string }) {
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;

  const { data, isLoading } = useQuery({
    queryKey: ['my-codes', page],
    queryFn: () => fetchUserCodes(nickname, page, pageSize),
    staleTime: 1000 * 60,
  });
  if (isLoading) {
    return <ActivityListSkeleton />;
  }
  if (!data) {
    return <p>데이터 없음</p>;
  }
  const { codeSnippets, totalCount } = data.snippets;
  const totalPages = Math.ceil(totalCount / pageSize);
  return (
    <>
      {totalCount === 0 ? (
        <EmptyList icon={<Code className="w-14 h-14 text-gray-300 mb-4" />} text="리뷰" />
      ) : (
        <>
          <div className="space-y-4">
            {codeSnippets.map(
              (snippet: {
                id: number;
                title: string;
                content: string;
                categories: { id: number; name: string }[];
                createdAt: string;
                reviewCount: number;
              }) => (
                <ActivityItem
                  key={snippet.id}
                  codeId={snippet.id}
                  title={snippet.title}
                  content={snippet.content}
                  categories={snippet.categories || []}
                  createdAt={snippet.createdAt}
                  reviewCount={snippet.reviewCount}
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
