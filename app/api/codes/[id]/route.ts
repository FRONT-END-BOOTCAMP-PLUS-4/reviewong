import { NextRequest, NextResponse } from 'next/server';
import { GetCodeSnippetUsecase } from '@/application/usecases/code/GetCodeSnippetUsecase';
import { PrCodeSnippetRepository } from '@/infra/repositories/prisma/PrCodeSnippetRepository';
import { DeleteCodeSnippetUsecase } from '@/application/usecases/code/DeleteCodeSnippetUsecase';
import { UpdateCodeSnippetUsecase } from '@/application/usecases/code/UpdateCodeSnippetUsecase';

export async function GET(request: NextRequest, context: { params: { id: string } }) {
  try {
    const repository = new PrCodeSnippetRepository();
    const usecase = new GetCodeSnippetUsecase(repository);
    const { id } = context.params;

    const result = await usecase.execute(parseInt(id));

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 404 });
    }

    return NextResponse.json(result.data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: number } }) {
  try {
    const repository = new PrCodeSnippetRepository();
    const usecase = new DeleteCodeSnippetUsecase(repository);

    const result = await usecase.execute(params.id);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ message: 'Successfully deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
  try {
    const body = await request.json();
    const repository = new PrCodeSnippetRepository();
    const usecase = new UpdateCodeSnippetUsecase(repository);

    const result = await usecase.execute(params.id, body);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ message: 'Successfully updated' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
