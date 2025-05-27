import { ReviewView } from '@/domain/entities/ReviewView';
import ReviewListClientContainer from './ReviewListClientContainer';

export default async function ReviewListContainer({ codeId }: { codeId: number }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/member/codes/${codeId}/reviews`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('리뷰 데이터를 불러오지 못했습니다');
  }

  const reviews: ReviewView[] = await res.json();

  return (
    <>
      <h3 className="font-bold m-5">리뷰 목록 ({reviews.length})</h3>
      <ReviewListClientContainer codeId={codeId} initialReviews={reviews} />
    </>
  );
}
// 'use client';

// import { useEffect, useState } from 'react';
// import { ReviewView } from '@/domain/entities/ReviewView';
// import ReviewListClientContainer from './ReviewListClientContainer';

// export default function ReviewListContainer({ codeId }: { codeId: number }) {
//   const [reviews, setReviews] = useState<ReviewView[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/member/codes/${codeId}/reviews`, {
//       cache: 'no-store',
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setReviews(data);
//         setLoading(false);
//       });
//   }, [codeId]);

//   if (loading) {
//     return <div>리뷰 로딩 중...</div>;
//   }

//   return (
//     <>
//       <h3 className="font-bold m-5">리뷰 목록 ({reviews.length})</h3>
//       <ReviewListClientContainer codeId={codeId} reviews={reviews} />
//     </>
//   );
// }
