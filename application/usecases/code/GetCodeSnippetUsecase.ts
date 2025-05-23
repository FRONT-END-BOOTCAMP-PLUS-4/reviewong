import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';
import { GetCodeSnippetDto } from './dto/GetCodeSnippetDto';

export class GetCodeSnippetUsecase {
  constructor(private codeSnippetRepository: CodeSnippetRepository) {}

  async execute(id: number): Promise<GetCodeSnippetDto> {
    const codeSnippet = await this.codeSnippetRepository.findById(id);
    if (!codeSnippet) {
      return { success: false, data: undefined, error: 'Code snippet not found' };
    }
    // categories 배열을 map하여 필요한 데이터만 추출
    const categories = codeSnippet.categories.map(({ category }) => ({
      id: category.id,
      name: category.name,
    }));

    // DTO로 필요한 데이터만 정리
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
          grade: codeSnippet.user.grade ? codeSnippet.user.grade.name : null,
        },
        categories: categories,
        createdAt: codeSnippet.createdAt,
        updatedAt: codeSnippet.updatedAt,
      },
    };

    return dto;
  }
}
