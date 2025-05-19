import { NextRequest, NextResponse } from 'next/server';
import { GetReviewsUsecase } from '@/application/usecases/review/GetReviewsUsecase';
import { PrReviewRepository } from '@/infra/repositories/prisma/PrReviewRepository';
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const codeId = parseInt(id);

    const parentIdQuery = request.nextUrl.searchParams.get('parent_id');
    const repository = new PrReviewRepository();
    const usecase = new GetReviewsUsecase(repository);
    const result = await usecase.execute({
      codeId,
      isReply: parentIdQuery !== null,
    });

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 404 });
    }

    return NextResponse.json(result.data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
