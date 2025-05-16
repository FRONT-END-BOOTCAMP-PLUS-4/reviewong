import { NextRequest, NextResponse } from 'next/server';
import { GetCodeSnippetUsecase } from '@/application/usecases/code/GetCodeSnippetUsecase';
import { PrCodeSnippetRepository } from '@/infra/repositories/prisma/PrCodeSnippetRepository';
import { DeleteCodeSnippetUsecase } from '@/application/usecases/code/DeleteCodeSnippetUsecase';
import { UpdateCodeSnippetUsecase } from '@/application/usecases/code/UpdateCodeSnippetUsecase';

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
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const codeSnippetrepository = new PrCodeSnippetRepository();
    const usecase = new DeleteCodeSnippetUsecase(codeSnippetrepository);

    const result = await usecase.execute(parseInt(id));

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ message: 'Successfully deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    const repository = new PrCodeSnippetRepository();
    const usecase = new UpdateCodeSnippetUsecase(repository);
    const body = await request.json();

    const result = await usecase.execute(parseInt(id, 10), body);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ message: 'Successfully updated' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
