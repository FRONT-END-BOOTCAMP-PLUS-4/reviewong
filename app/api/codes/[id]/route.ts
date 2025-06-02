import { NextRequest, NextResponse } from 'next/server';
import { GetCodeSnippetUsecase } from '@/application/usecases/code/GetCodeSnippetUsecase';
import { PrCodeSnippetRepository } from '@/infra/repositories/prisma/PrCodeSnippetRepository';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const repository = new PrCodeSnippetRepository();
    const usecase = new GetCodeSnippetUsecase(repository);

    const result = await usecase.execute(parseInt(id));

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 404 });
    }

    return NextResponse.json(result.data);
  } catch (error) {
    return NextResponse.json({ error: `Internal Server Error ${error}` }, { status: 500 });
  }
}
