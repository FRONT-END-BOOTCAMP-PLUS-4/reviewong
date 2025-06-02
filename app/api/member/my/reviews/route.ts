import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrReviewRepository } from '@/infra/repositories/prisma/PrReviewRepository';
import { GetUserReviewsUseCase } from '@/application/usecases/user/GetUserReviewsUsecase';

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') ?? '1', 10);
    const pageSize = parseInt(searchParams.get('pageSize') ?? '10', 10);

    const reviewRepository = new PrReviewRepository();
    const getUserReviewsUseCase = new GetUserReviewsUseCase(reviewRepository);

    const result = await getUserReviewsUseCase.execute(session.user.id, page, pageSize);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 404 });
    }

    return NextResponse.json(result.data); // result.data에 리뷰 + pagination 정보 포함
  } catch (error) {
    return NextResponse.json({ error: `서버 오류가 발생했습니다. ${error}` }, { status: 500 });
  }
}
