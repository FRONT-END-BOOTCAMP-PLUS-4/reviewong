import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrReviewRepository } from '@/infra/repositories/prisma/PrReviewRepository';
import { GetReviewCountHeatmapUsecase } from '@/application/usecases/review/GetReviewCountHeatmapUsecase';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });
    }
    // 리뷰 히트맵 데이터 가져오기
    const reviewRepository = new PrReviewRepository();
    const getReviewHeatmapUsecase = new GetReviewCountHeatmapUsecase(reviewRepository);
    const result = await getReviewHeatmapUsecase.execute(session.user.id);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({
      reviewHeatmap: result.data,
    });
  } catch (error) {
    console.error('Error fetching user profile or review heatmap:', error);
    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
