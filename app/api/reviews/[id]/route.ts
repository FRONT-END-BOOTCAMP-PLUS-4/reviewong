import { EditReviewUsecase } from '@/application/usecases/review/EditReviewUsecase';
import { DeleteReviewUsecase } from '@/application/usecases/review/DeleteReviewUsecase';
import { PrReviewRepository } from '@/infra/repositories/prisma/PrReviewRepository';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const reviewId = parseInt(id);
    const body = await req.json();
    const session = await getServerSession(authOptions);
    if (!session || !session.user.id) {
      return NextResponse.json(
        { success: false, message: '로그인이 필요합니다.' },
        { status: 401 }
      );
    }

    const repository = new PrReviewRepository();
    const usecase = new EditReviewUsecase(repository);
    const result = await usecase.execute(reviewId, body.content, session.user.id);

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

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const reviewId = parseInt(id);
    const session = await getServerSession(authOptions);
    if (!session || !session.user.id) {
      return NextResponse.json(
        { success: false, message: '로그인이 필요합니다.' },
        { status: 401 }
      );
    }
    const reviewRepository = new PrReviewRepository();
    const usecase = new DeleteReviewUsecase(reviewRepository);
    await usecase.execute(reviewId, session.user.id);

    return NextResponse.json({ message: '리뷰 삭제 성공' }, { status: 200 });
  } catch (error) {
    console.error('리뷰 삭제 실패:', error);
    return NextResponse.json({ error: '리뷰 삭제 중 서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
