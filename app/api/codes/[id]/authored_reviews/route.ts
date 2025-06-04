import { NextRequest, NextResponse } from 'next/server';
import { GetMyCodeReviewsUseCase } from '@/application/usecases/review/GetMyCodeReviewsUseCase';
import { PrCodeSnippetRepository } from '@/infra/repositories/prisma/PrCodeSnippetRepository';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const codeSnippetRepository = new PrCodeSnippetRepository();
    const getMyCodeReviewsUseCase = new GetMyCodeReviewsUseCase(codeSnippetRepository);
    // 코드 작성자 아이디 추출
    const result = await getMyCodeReviewsUseCase.execute(parseInt(id, 10));
    const authorId = result.data;
    // 로그인한 사용자 ID 추출
    const userId = request.headers.get('Authorization')?.replace('Bearer ', '');

    if (!userId) {
      return NextResponse.json(
        { result: false, error: '로그인 하지 않은 사용자입니다.' },
        { status: 401 }
      );
    }

    // 작성자가 탈퇴한 경우
    if (authorId === undefined || authorId === null) {
      return NextResponse.json(
        { result: false, error: '코드 작성자가 탈퇴하였습니다.' },
        { status: 404 }
      );
    }

    // 작성자 불일치
    if (authorId !== userId) {
      return NextResponse.json(
        { result: false, error: '작성자와 사용자가 일치하지 않습니다.' },
        { status: 403 }
      );
    }

    // 일치의 경우 접근 허용
    return NextResponse.json({ result: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { result: false, error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
