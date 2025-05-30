import { NextRequest, NextResponse } from 'next/server';

import { PrCodeSnippetRepository } from '@/infra/repositories/prisma/PrCodeSnippetRepository';
import { GetUserCodeSnippetsUsecase } from '@/application/usecases/user/anon/GetUserCodeSnippetsUsecase';

export async function GET(req: NextRequest, { params }: { params: Promise<{ nickname: string }> }) {
  try {
    const { nickname } = await params;

    if (!nickname) {
      return NextResponse.json({ error: '존재하지 않는 사용자입니다.' }, { status: 401 });
    }
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') ?? '1', 10);
    const pageSize = parseInt(searchParams.get('pageSize') ?? '10', 10);

    const codeSnippetRepository = new PrCodeSnippetRepository();
    const getUserCodeSnippetsUsecase = new GetUserCodeSnippetsUsecase(codeSnippetRepository);

    const result = await getUserCodeSnippetsUsecase.execute(nickname, page, pageSize);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 404 });
    }

    return NextResponse.json({ snippets: result.data });
  } catch (error) {
    console.error('Error fetching user code snippets', error);
    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
