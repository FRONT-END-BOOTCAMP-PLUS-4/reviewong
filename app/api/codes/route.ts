import { NextRequest, NextResponse } from 'next/server';
import { PrCodeSnippetRepository } from '@/infra/repositories/prisma/PrCodeSnippetRepository';
import { GetCodeListUsecase } from '@/application/usecases/code/GetCodeListUsecase';
import { CodeListFilter } from '@/domain/filters/CodeListFilter';
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const categoryList = searchParams.get('categories');

    const filter: CodeListFilter = {
      categories: categoryList
        ? categoryList.split(',').map((category) => parseInt(category))
        : undefined,
      // 전달 받을 카테고리가 없을 경우 undefined로 설정
    };

    const repository = new PrCodeSnippetRepository();
    const usecase = new GetCodeListUsecase(repository);

    const result = await usecase.execute(filter);

    // 카테고리 선택하지 않을 경우 모든 코드 스니펫을 가져옴
    if (!categoryList) {
      const result = await usecase.execute({});

      return NextResponse.json(result);
    }

    if (!result || result.length === 0) {
      return NextResponse.json({ error: '해당 카테고리의 코드가 없습니다.' }, { status: 404 });
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: `버 오류가 발생했습니다. ${error}` }, { status: 500 });
  }
}
