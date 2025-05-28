'use client';
import { useQuery } from '@tanstack/react-query';
import MyActivityItem from '../components/MyActivityItem';

const fetchMyCodes = async () => {
  const res = await fetch('/api/member/my/codes');
  return res.json();
};

export default function MyWrittenCodeContainer({ isActive }: { isActive: boolean }) {
  const { data, isLoading } = useQuery({
    queryKey: ['my-codes'],
    queryFn: fetchMyCodes,
    enabled: isActive,
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
  console.log(data);

  return (
    <div className="space-y-4">
      {data.snippets.map((item) => (
        <MyActivityItem
          key={item.id}
          codeId={item.id}
          title={item.title}
          content={item.content}
          categories={item.categories || []}
          createdAt={item.createdAt}
          reviewCount={item.reviewCount}
        />
      ))}
    </div>
  );
}
