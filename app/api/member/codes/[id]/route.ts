import { NextRequest, NextResponse } from 'next/server';
import { DeleteCodeSnippetUsecase } from '@/application/usecases/code/DeleteCodeSnippetUsecase';
import { UpdateCodeSnippetUsecase } from '@/application/usecases/code/UpdateCodeSnippetUsecase';
import { PrCodeSnippetRepository } from '@/infra/repositories/prisma/PrCodeSnippetRepository';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    if (!session || !session.user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const codeSnippetrepository = new PrCodeSnippetRepository();
    const usecase = new DeleteCodeSnippetUsecase(codeSnippetrepository);

    const result = await usecase.execute(parseInt(id), session.user.id);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ message: 'Successfully deleted' });
  } catch (error) {
    return NextResponse.json({ error: `Internal Server Error ${error}` }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    if (!session || !session.user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const repository = new PrCodeSnippetRepository();
    const usecase = new UpdateCodeSnippetUsecase(repository);
    const body = await request.json();

    const result = await usecase.execute(parseInt(id, 10), body, session.user.id);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ message: 'Successfully updated' });
  } catch (error) {
    return NextResponse.json({ error: `Internal Server Error ${error}` }, { status: 500 });
  }
}
