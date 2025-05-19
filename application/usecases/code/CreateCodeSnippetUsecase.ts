import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';
import { CreateCodeSnippetDto } from './dto/CreateCodeSnippetDto';

export class CreateCodeSnippetUsecase {
  constructor(private codeSnippetRepository: CodeSnippetRepository) {}

  async execute(
    dto: CreateCodeSnippetDto
  ): Promise<{ id: number; success: boolean; error?: string }> {
    try {
      // DTO를 Repository 형식으로 변환 (여기서 카테고리 ID를 숫자로 변환)
      const id = await this.codeSnippetRepository.create({
        userId: dto.userId,
        title: dto.title,
        content: dto.content,
        categories: dto.categories.map((categoryId) => categoryId),
      });

      return {
        id,
        success: true,
      };
    } catch (error) {
      return {
        id: 0,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }
}
