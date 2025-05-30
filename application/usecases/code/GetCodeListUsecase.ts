import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';
import { CodeSnippetWithCount } from '@/infra/repositories/prisma/PrCodeSnippetRepository';
import { CodeListFilter } from '@/domain/filters/CodeListFilter';

export class GetCodeListUsecase {
  constructor(private codeSnippetRepository: CodeSnippetRepository) {}

  async execute(filter: CodeListFilter): Promise<CodeSnippetWithCount[]> {
    const codeSnippets = await this.codeSnippetRepository.findAll(filter);

    if (!codeSnippets || codeSnippets.length === 0) {
      throw new Error('No code snippets found');
    }

    return codeSnippets.map((snippet) => ({
      ...snippet,
      reviewCount: snippet.reviewCount,
      user: {
        id: snippet.user.id,
        nickname: snippet.user.nickname,
        imageUrl: snippet.user.imageUrl,
        grade: snippet.user.grade, // `grade: { name: string } | null` 형식 그대로 유지
      },
      categories: snippet.categories.map((c) => ({
        ...c,
        category: {
          id: c.category.id,
          name: c.category.name,
        },
      })),
    }));
  }
}
