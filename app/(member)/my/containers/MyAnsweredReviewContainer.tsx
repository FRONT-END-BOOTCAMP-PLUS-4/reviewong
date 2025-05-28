'use client';
import { useQuery } from '@tanstack/react-query';

const fetchMyReviews = async () => {
  const res = await fetch('/api/member/my/codes');
  return res.json();
};

export default function MyAnsweredReviewContainer({ isActive }: { isActive: boolean }) {
  const { data, isLoading } = useQuery({
    queryKey: ['my-reviews'],
    queryFn: fetchMyReviews,
    enabled: isActive,
    staleTime: 1000 * 60,
  });

  if (!isActive) {
    return null;
  }
  if (isLoading) {
    return <p>로딩 중...</p>;
  }
  console.log(data);
  return (
    <div className="item-list">
      {data?.snippets.map((item) => (
        <div key={item.id} className="item-card">
          <h3>{item.title}</h3>
          <p>{item.comment}</p>
        </div>
      ))}
    </div>
  );
}
