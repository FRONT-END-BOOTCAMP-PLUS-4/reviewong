import { NextRequest, NextResponse } from 'next/server';
import { PrReviewRepository } from '@/infra/repositories/prisma/PrReviewRepository';
import { GetUserReviewsUseCase } from '@/application/usecases/user/anon/GetUserReviewsUsecase';

export async function GET(req: NextRequest, { params }: { params: Promise<{ nickname: string }> }) {
  try {
    const { nickname } = await params;

    if (!nickname) {
      return NextResponse.json({ error: '존재하지 않는 사용자입니다.' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') ?? '1', 10);
    const pageSize = parseInt(searchParams.get('pageSize') ?? '10', 10);

    const reviewRepository = new PrReviewRepository();
    const getUserReviewsUseCase = new GetUserReviewsUseCase(reviewRepository);

    const result = await getUserReviewsUseCase.execute(nickname, page, pageSize);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 404 });
    }

    return NextResponse.json(result.data); // result.data에 리뷰 + pagination 정보 포함
  } catch (error) {
    return NextResponse.json({ error: `서버 오류가 발생했습니다. ${error}` }, { status: 500 });
  }
}
