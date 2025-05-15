import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';
import { UpdateCodeSnippetDto } from './dto/UpdateCodeSnippetDto';

export class UpdateCodeSnippetUsecase {
  constructor(private codeSnippetRepository: CodeSnippetRepository) {}

  async execute(
    id: number,
    dto: UpdateCodeSnippetDto
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const success = await this.codeSnippetRepository.update(id, dto);
      return { success };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update code snippet',
      };
    }
  }
}
