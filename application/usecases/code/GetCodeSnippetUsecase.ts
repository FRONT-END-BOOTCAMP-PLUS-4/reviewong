import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';
import { GetCodeSnippetDto } from './dto/GetCodeSnippetDto';

export class GetCodeSnippetUsecase {
  constructor(private codeSnippetRepository: CodeSnippetRepository) {}

  async execute(id: number): Promise<GetCodeSnippetDto> {
    const codeSnippet = await this.codeSnippetRepository.findById(id);
    if (!codeSnippet) {
      return { success: false, data: undefined, error: 'Code snippet not found' };
    }
    // categories 배열에서 이름만 추출
    const categoryNames = codeSnippet.categories.map((c) => c.category.name);

    // DTO로 필요한 데이터만 깔끔하게 정리
    const dto: GetCodeSnippetDto = {
      success: true,
      data: {
        id: codeSnippet.id,
        title: codeSnippet.title,
        content: codeSnippet.content,
        user: {
          id: codeSnippet.user.id,
          nickname: codeSnippet.user.nickname,
          imageUrl: codeSnippet.user.imageUrl,
        },
        categories: categoryNames,
        createdAt: codeSnippet.createdAt,
        updatedAt: codeSnippet.updatedAt,
      },
    };

    return dto;
  }
}
