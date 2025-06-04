import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';

export class GetMyCodeReviewsUseCase {
  constructor(private readonly codeSnippetRepository: CodeSnippetRepository) {}

  async execute(id: number): Promise<{ success: boolean; data?: string; error?: string }> {
    try {
      const authordId = await this.codeSnippetRepository.findUserIdByCodeId(id);

      return {
        success: true,
        data: authordId ? authordId.toString() : undefined,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : '코드 작성자를 불러오는데 실패했습니다.',
      };
    }
  }
}
