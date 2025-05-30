import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

import { PrCodeSnippetRepository } from '@/infra/repositories/prisma/PrCodeSnippetRepository';
import { GetUserCodeSnippetsUsecase } from '@/application/usecases/user/GetUserCodeSnippetsUsecase';

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') ?? '1', 10);
    const pageSize = parseInt(searchParams.get('pageSize') ?? '10', 10);

    if (!session || !session.user) {
      return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });
    }

    const codeSnippetRepository = new PrCodeSnippetRepository();
    const getUserCodeSnippetsUsecase = new GetUserCodeSnippetsUsecase(codeSnippetRepository);

    const result = await getUserCodeSnippetsUsecase.execute(session.user.id, page, pageSize);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 404 });
    }

    return NextResponse.json({ snippets: result.data });
  } catch (error) {
    console.error('Error fetching user code snippets', error);
    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
