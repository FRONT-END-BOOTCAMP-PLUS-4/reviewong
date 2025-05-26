// app/api/daily-challenge/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrCodeSnippetRepository } from '@/infra/repositories/prisma/PrCodeSnippetRepository';
import { GetDailyChallengeUsecase } from '@/application/usecases/code/GetDailyChallengeUsecase';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });
    }

    const codeSnippetRepository = new PrCodeSnippetRepository();
    const getDailyChallengeUsecase = new GetDailyChallengeUsecase(codeSnippetRepository);

    const result = await getDailyChallengeUsecase.execute(session.user.id);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 404 });
    }

    return NextResponse.json(result.data);
  } catch (error) {
    console.error('데일리 챌린지 조회 실패:', error);
    return NextResponse.json(
      { error: '데일리 챌린지를 불러오는데 실패했습니다.' },
      { status: 500 }
    );
  }
}
