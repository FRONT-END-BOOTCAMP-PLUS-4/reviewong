import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';

export class DeleteCodeSnippetUsecase {
  constructor(private codeSnippetRepository: CodeSnippetRepository) {}

  async execute(id: number, userId: string): Promise<{ success: boolean; error?: string }> {
    try {
      const snippet = await this.codeSnippetRepository.findById(id);
      if (!snippet) {
        return { success: false, error: 'Code snippet not found' };
      }
      if (snippet.userId !== userId) {
        return { success: false, error: 'Forbidden: You are not the author' };
      }
      const success = await this.codeSnippetRepository.delete(id);
      return { success };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to delete code snippet',
      };
    }
  }
}
