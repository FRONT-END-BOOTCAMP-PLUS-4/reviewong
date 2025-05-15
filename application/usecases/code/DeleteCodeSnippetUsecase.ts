import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';

export class DeleteCodeSnippetUsecase {
  constructor(private codeSnippetRepository: CodeSnippetRepository) {}

  async execute(id: number): Promise<{ success: boolean; error?: string }> {
    try {
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
