import { CreateReviewDto } from '@/application/usecases/review/dto/CreateReviewDto';
import { CreateReviewUsecase } from '@/application/usecases/review/CreateReviewUsecase';
import { PrReviewRepository } from '@/infra/repositories/prisma/PrReviewRepository';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const session = await getServerSession(authOptions);
    if (!session || !session.user.id) {
      return NextResponse.json(
        { success: false, message: '로그인이 필요합니다.' },
        { status: 401 }
      );
    }

    const reviewData: CreateReviewDto = {
      content: body.content,
      codeId: body.codeId,
      parentId: body.parentId ?? null,
      userId: session.user.id,
    };

    const usecase = new CreateReviewUsecase(new PrReviewRepository());
    const newReview = await usecase.execute(reviewData);

    return NextResponse.json({ success: true, data: newReview }, { status: 201 });
  } catch (error: unknown) {
    console.error('리뷰 생성 실패:', error);
    const message = error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.';
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
