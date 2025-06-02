// api/codes/[id]/latest_reviews/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { GetLatestReviewsUsecase } from '@/application/usecases/review/GetLatestReviewsUsecase';
import { PrReviewRepository } from '@/infra/repositories/prisma/PrReviewRepository';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const reviewRepository = new PrReviewRepository();
    const getLatestReviewsUsecase = new GetLatestReviewsUsecase(reviewRepository);
    const result = await getLatestReviewsUsecase.execute(Number(id));

    console.log('최신 리뷰 API result:', result);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 404 });
    }
    return NextResponse.json(result.data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
