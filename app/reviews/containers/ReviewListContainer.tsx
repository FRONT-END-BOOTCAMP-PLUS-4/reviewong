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

  return <ReviewListClientContainer codeId={codeId} initialReviews={reviews} />;
}
