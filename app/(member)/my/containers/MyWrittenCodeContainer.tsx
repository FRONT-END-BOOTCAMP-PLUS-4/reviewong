'use client';
import { useQuery } from '@tanstack/react-query';
import MyActivityItem from '../components/MyActivityItem';
import { useState } from 'react';
import MyPagination from '@/app/components/MyPagination';

const fetchMyCodes = async (page: number, pageSize: number) => {
  const res = await fetch(`/api/member/my/codes?page=${page}&pageSize=${pageSize}`);
  return res.json();
};

export default function MyWrittenCodeContainer({ isActive }: { isActive: boolean }) {
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;

  const { data, isLoading } = useQuery({
    queryKey: ['my-reviews', page],
    queryFn: () => fetchMyCodes(page, pageSize),
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
  if (!data) {
    return <p>데이터 없음</p>;
  }
  const { codeSnippets, totalCount } = data.snippets;
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
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
            <MyActivityItem
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
  );
}
