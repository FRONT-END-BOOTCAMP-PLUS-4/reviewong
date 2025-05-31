import { CreateReviewLikeUsecase } from '@/application/usecases/reviewLike/CreateReviewLikeUsecase';
import { DeleteReviewLikeUsecase } from '@/application/usecases/reviewLike/DeleteReviewLikeUsecase';
import { PrReviewLikeRepository } from '@/infra/repositories/prisma/PrReviewLikeRepository';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
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

    const repository = new PrReviewLikeRepository();
    const usecase = new CreateReviewLikeUsecase(repository);
    const isLiked = await usecase.execute(session.user.id, reviewId);

    return NextResponse.json({ success: true, isLiked }, { status: 200 });
  } catch (error) {
    console.error('리뷰 좋아요 등록 실패:', error);
    return NextResponse.json({ success: false, error: '서버 에러' }, { status: 500 });
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

    const repository = new PrReviewLikeRepository();
    const usecase = new DeleteReviewLikeUsecase(repository);
    const isLiked = await usecase.execute(session.user.id, reviewId);

    return NextResponse.json({ success: true, isLiked }, { status: 200 });
  } catch (error) {
    console.error('리뷰 좋아요 삭제 실패:', error);
    return NextResponse.json({ success: false, error: '서버 에러' }, { status: 500 });
  }
}
