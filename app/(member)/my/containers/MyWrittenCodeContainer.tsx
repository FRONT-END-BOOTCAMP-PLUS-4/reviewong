'use client';
import { useQuery } from '@tanstack/react-query';
import ActivityItem from '../../../components/ActivityItem';
import { useState } from 'react';
import MyPagination from '@/app/components/MyPagination';

const fetchMyCodes = async (page: number, pageSize: number) => {
  const res = await fetch(`/api/member/my/codes?page=${page}&pageSize=${pageSize}`);
  return res.json();
};

export default function MyWrittenCodeContainer() {
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;

  const { data, isLoading } = useQuery({
    queryKey: ['my-codes', page],
    queryFn: () => fetchMyCodes(page, pageSize),
    placeholderData: (prev) => prev, // 페이지 변경 시 이전 데이터를 유지
    staleTime: 1000 * 60,
  });
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
  );
}
