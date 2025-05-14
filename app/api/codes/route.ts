import { CreateCodeSnippetUsecase } from '@/application/usecases/code/CreateCodeSnippetUsecase';
import { CreateCodeSnippetDto } from '@/application/usecases/code/dto/CreateCodeSnippetDto';
import { PrCodeSnippetRepository } from '@/infra/repositories/prisma/PrCodeSnippetRepository';
import { NextRequest, NextResponse } from 'next/server';

// POST 요청 핸들러 - 코드 스니펫 생성
export async function POST(request: NextRequest) {
  try {
    // 요청 본문 파싱
    const body = await request.json();

    // 필수 필드 검증
    if (!body.userId || !body.title || !body.content || !Array.isArray(body.categories)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields. userId, title, content, and categories are required.',
        },
        { status: 400 }
      );
    }

    // DTO 생성
    const createCodeSnippetDto = new CreateCodeSnippetDto(
      body.userId,
      body.title,
      body.content,
      body.categories
    );

    // 유스케이스 및 리포지토리 초기화
    const codeSnippetRepository = new PrCodeSnippetRepository();
    const createCodeSnippetUsecase = new CreateCodeSnippetUsecase(codeSnippetRepository);

    // 유스케이스 실행
    const result = await createCodeSnippetUsecase.execute(createCodeSnippetDto);

    // 결과에 따른 응답 반환
    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          id: result.id,
          message: 'Code snippet created successfully',
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          error: result.error || 'Failed to create code snippet',
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error creating code snippet:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
      },
      { status: 500 }
    );
  }
}
