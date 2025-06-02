import { NextRequest, NextResponse } from 'next/server';
import { GetReviewsUsecase } from '@/application/usecases/review/GetReviewsUsecase';
import { PrReviewRepository } from '@/infra/repositories/prisma/PrReviewRepository';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const userId = request.headers.get('Authorization')?.replace('Bearer ', '');
    const parentIdParam = request.nextUrl.searchParams.get('parent_id');
    const parentId = parentIdParam !== null ? parseInt(parentIdParam, 10) : null;
    const repository = new PrReviewRepository();
    const usecase = new GetReviewsUsecase(repository);
    const result = await usecase.execute({
      codeId: parseInt(id),
      parentId: parentId ? parentId : null,
      userId: userId ? userId : null,
    });

    if (!result.success) {
      console.error('리뷰 조회 실패:', result.error);
      return NextResponse.json({ error: result.error }, { status: 404 });
    }

    return NextResponse.json(result.data);
  } catch (error) {
    return NextResponse.json({ error: `Internal Server Error ${error}` }, { status: 500 });
  }
}
