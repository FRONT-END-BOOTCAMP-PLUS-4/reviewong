'use client';
import { useQuery } from '@tanstack/react-query';
import ActivityItem from '../../../components/ActivityItem';
import { useState } from 'react';
import MyPagination from '@/app/components/MyPagination';
import { useRouter } from 'next/navigation';
import EmptyList from '@/app/components/EmptyList';
import { Code } from 'lucide-react';

const fetchMyCodes = async (page: number, pageSize: number) => {
  const res = await fetch(`/api/member/my/codes?page=${page}&pageSize=${pageSize}`);
  return res.json();
};

export default function MyWrittenCodeContainer() {
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;
  const router = useRouter();
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
      {totalCount === 0 ? (
        <EmptyList
          icon={<Code className="w-14 h-14 text-gray-300 mb-4" />}
          text="코드"
          midTitle="코드를 작성하고 리뷰를 받아보세요!"
          btnText="코드 작성하기"
          onClick={() => router.push('/codes/create')}
        />
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
