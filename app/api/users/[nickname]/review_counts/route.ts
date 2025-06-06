import { NextRequest, NextResponse } from 'next/server';
import { PrReviewRepository } from '@/infra/repositories/prisma/PrReviewRepository';
import { GetReviewCountHeatmapUsecase } from '@/application/usecases/review/anon/GetReviewCountHeatmapUsecase';

export async function GET(req: NextRequest, { params }: { params: Promise<{ nickname: string }> }) {
  try {
    const { nickname } = await params;

    if (!nickname) {
      return NextResponse.json({ error: '존재하지 않는 사용자입니다.' }, { status: 401 });
    }
    // 리뷰 히트맵 데이터 가져오기
    const reviewRepository = new PrReviewRepository();
    const getReviewHeatmapUsecase = new GetReviewCountHeatmapUsecase(reviewRepository);
    const result = await getReviewHeatmapUsecase.execute(nickname);

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
