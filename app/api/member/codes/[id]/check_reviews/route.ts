import { NextRequest, NextResponse } from 'next/server';
import { PrReviewRepository } from '@/infra/repositories/prisma/PrReviewRepository';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const userId = request.headers.get('Authorization')?.replace('Bearer ', '');

    if (userId) {
      // 로그인한 사용자일 경우 해당 사용자가 리뷰를 작성했는지 확인
      const repository = new PrReviewRepository();
      const getUserReview = await repository.findUserFirst(userId, parseInt(id, 10));
      if (getUserReview) {
        // 이미 리뷰를 작성한 경우, 작성된 리뷰를 반환
        return NextResponse.json({
          hasUserReviewed: true,
          data: { reviewContent: getUserReview.content },
        });
      } else {
        // 리뷰를 작성하지 않은 경우 false를 반환
        return NextResponse.json(
          { hasUserReviewed: false, message: 'No review found for this user.', data: null },
          { status: 404 }
        );
      }
    }
    // 로그인하지 않은 사용자일 경우 false를 반환
    return NextResponse.json(
      { hasUserReviewed: false, message: 'User is not logged in.', data: null },
      { status: 401 }
    );
  } catch (error) {
    console.error('Error checking user reviews:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
