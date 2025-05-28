'use client';
import { formatDate } from '@/utils/formatDate';
import { useQuery } from '@tanstack/react-query';

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
        <div
          key={item.id}
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.content}</p>
          <p className="text-xs text-gray-400">{formatDate(new Date(item.createAt))}</p>
        </div>
      ))}
    </div>
  );
}
