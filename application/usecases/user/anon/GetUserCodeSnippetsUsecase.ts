import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';
import { GetUserCodeSnippetsDto } from '../dto/GetUserCodeSnippetsDto';

export class GetUserCodeSnippetsUsecase {
  constructor(private codeSnippetRepository: CodeSnippetRepository) {}
  async execute(nickname: string, page: number, pageSize: number): Promise<GetUserCodeSnippetsDto> {
    try {
      const [data, totalCount] = await this.codeSnippetRepository.findAllByUserNickname(
        nickname,
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
