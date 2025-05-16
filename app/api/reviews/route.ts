import { CreateReviewDto } from '@/application/usecases/review/dto/ReviewDto';
import { CreateReviewUsecase } from '@/application/usecases/review/CreateReviewUsecase';
import { PrReviewRepository } from '@/infra/repositories/prisma/PrReviewRepository';

import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const reviewData: CreateReviewDto = {
      content: body.content,
      codeId: body.codeId,
      parentId: body.parentId ?? null,
      userId: body.userId,
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
