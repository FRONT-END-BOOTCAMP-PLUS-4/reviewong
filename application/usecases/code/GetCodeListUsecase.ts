import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';
import { GetCodeSnippetDto } from './dto/GetCodeSnippetDto';
import { CodeListFilter } from '@/domain/filters/CodeListFilter';

export class GetCodeListUsecase {
  constructor(private codeSnippetRepository: CodeSnippetRepository) {}

  async execute(filter: CodeListFilter): Promise<GetCodeSnippetDto[]> {
    const codeSnippets = await this.codeSnippetRepository.findAll(filter);

    if (!codeSnippets || codeSnippets.length === 0) {
      return [
        {
          success: false,
          error: '코드 리스트가 존재하지 않습니다.',
        },
      ];
    }

    return codeSnippets.map((snippet) => ({
      success: true,
      data: {
        id: snippet.id,
        title: snippet.title,
        content: snippet.content,
        user: {
          id: snippet.user.id,
          nickname: snippet.user.nickname,
          imageUrl: snippet.user.imageUrl,
          grade: snippet.user.grade.name,
        },
        categories: snippet.categories.map((c) => ({
          id: c.category.id,
          name: c.category.name,
        })),
        createdAt: snippet.createdAt,
        updatedAt: snippet.updatedAt,
      },
    }));
  }
}
