import { ReviewView } from '@/domain/entities/ReviewView';
import ReviewListClientContainer from './ReviewListClientContainer';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function ReviewListContainer({ codeId }: { codeId: number }) {
  const session = await getServerSession(authOptions);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/member/codes/${codeId}/reviews`,
    {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        Authorization: session ? `Bearer ${session.user.id}` : '',
      },
    }
  );

  if (!res.ok) {
    throw new Error('리뷰 데이터를 불러오지 못했습니다');
  }

  const reviews: ReviewView[] = await res.json();

  return <ReviewListClientContainer codeId={codeId} initialReviews={reviews} />;
}
