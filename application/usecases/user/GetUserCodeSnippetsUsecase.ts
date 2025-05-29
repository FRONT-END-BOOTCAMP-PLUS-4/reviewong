import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';
import { GetUserCodeSnippetsDto } from './dto/GetUserCodeSnippetsDto';

export class GetUserCodeSnippetsUsecase {
  constructor(private codeSnippetRepository: CodeSnippetRepository) {}
  async execute(userId: string, page: number, pageSize: number): Promise<GetUserCodeSnippetsDto> {
    try {
      const [data, totalCount] = await this.codeSnippetRepository.findAllByUserId(
        userId,
        page,
        pageSize
      );

      return new GetUserCodeSnippetsDto(true, {
        codeSnippets: data,
        totalCount,
        page,
        pageSize,
      });
    } catch (error) {
      return new GetUserCodeSnippetsDto(
        false,
        null,
        error instanceof Error ? error.message : 'Failed to get user reviews'
      );
    }
  }
}
