import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';
import { GetUserCodeSnippetsDto } from './dto/GetUserCodeSnippetsDto';
import { CodeSnippetDto } from '../code/dto/GetCodeSnippetDto';

export class GetUserCodeSnippetsUsecase {
  constructor(private codeSnippetRepository: CodeSnippetRepository) {}

  async execute(userId: string): Promise<GetUserCodeSnippetsDto> {
    try {
      const rawSnippets = await this.codeSnippetRepository.findAllByUserId(userId);

      const data: Omit<CodeSnippetDto, 'user'>[] = rawSnippets.map((snippet) => ({
        id: snippet.id,
        title: snippet.title,
        content: snippet.content,
        createdAt: snippet.createdAt,
        updatedAt: snippet.updatedAt,
        categories: snippet.categories.map((c) => ({
          id: c.category.id,
          name: c.category.name,
        })),
      }));

      return new GetUserCodeSnippetsDto(true, data);
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get user codesnippets',
      };
    }
  }
}
