import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';
import { UpdateCodeSnippetDto } from './dto/UpdateCodeSnippetDto';

export class UpdateCodeSnippetUsecase {
  constructor(private codeSnippetRepository: CodeSnippetRepository) {}

  async execute(
    id: number,
    dto: UpdateCodeSnippetDto,
    userId: string
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const snippet = await this.codeSnippetRepository.findById(id);
      if (!snippet) {
        return { success: false, error: 'Code snippet not found' };
      }
      if (snippet.userId !== userId) {
        return { success: false, error: 'Forbidden: You are not the author' };
      }
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
