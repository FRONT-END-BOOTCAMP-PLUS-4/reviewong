import { ReviewView } from '@/domain/entities/ReviewView';
import ReviewListClientContainer from './ReviewListClientContainer';

export default async function ReviewListContainer({ codeId }: { codeId: number }) {
  const res = await fetch(`http://localhost:3000/api/member/codes/${codeId}/reviews`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('리뷰 데이터를 불러오지 못했습니다');

  const reviews: ReviewView[] = await res.json();

  return (
    <>
      <h3 className="font-bold m-5">리뷰 목록 ({reviews.length})</h3>
      <ReviewListClientContainer codeId={codeId} reviews={reviews} />
    </>
  );
}
