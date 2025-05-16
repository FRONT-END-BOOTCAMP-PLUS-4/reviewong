import { updateReviewDto } from '@/application/usecases/review/dto/ReviewDto';
import { EditReviewUsecase } from '@/application/usecases/review/EditReviewUsecase';
import { DeleteReviewUsecase } from '@/application/usecases/review/DeleteReviewUsecase';
import { PrReviewRepository } from '@/infra/repositories/prisma/PrReviewRepository';

import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest, { params }: { params: { id: number } }) {
  try {
    const body = await req.json();
    const dto = new updateReviewDto(body.content, body.parentId);
    const repository = new PrReviewRepository();
    const usecase = new EditReviewUsecase(repository);
    const result = await usecase.execute(params.id, dto);

    if (!result) {
      return new Response(JSON.stringify({ success: false, error: '리뷰 수정 실패' }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ success: false, error: '서버 에러' }), { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: number } }) {
  try {
    const reviewId = params.id;

    const usecase = new DeleteReviewUsecase(new PrReviewRepository());
    await usecase.execute(reviewId);

    return NextResponse.json({ message: '리뷰 삭제 성공' }, { status: 200 });
  } catch (error) {
    console.error('리뷰 삭제 실패:', error);
    return NextResponse.json({ error: '리뷰 삭제 중 서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
