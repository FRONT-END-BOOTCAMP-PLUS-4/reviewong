import { ReviewView } from '@/domain/entities/ReviewView';
import ReviewListClientContainer from './ReviewListClientContainer';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function ReviewListContainer({ codeId }: { codeId: number }) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.id) {
    return <>로그인 하지 않은 사용자에게 보여줄 컴포넌트</>;
  } else {
    const checkUserReview = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/member/codes/${codeId}/check_reviews`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user.id}`,
        },
      }
    );
    if (!checkUserReview.ok) {
      return <>리뷰 작성 여부를 확인하는 중 오류가 발생했습니다.</>;
    }
  }
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
