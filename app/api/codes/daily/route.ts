// app/api/daily-challenge/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrCodeSnippetRepository } from '@/infra/repositories/prisma/PrCodeSnippetRepository';
import { GetDailyChallengeUsecase } from '@/application/usecases/code/GetDailyChallengeUsecase';
import { PrReviewRepository } from '@/infra/repositories/prisma/PrReviewRepository';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId') || undefined;
    const codeSnippetRepository = new PrCodeSnippetRepository();
    const reviewRepository = new PrReviewRepository();

    const getDailyChallengeUsecase = new GetDailyChallengeUsecase(
      codeSnippetRepository,
      reviewRepository
    );

    // 비회원인 경우 userId를 undefined로 전달하여 모든 코드 중에서 랜덤 선택
    const result = await getDailyChallengeUsecase.execute(userId);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || '데일리 챌린지를 찾을 수 없습니다.' },
        { status: 404 }
      );
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
