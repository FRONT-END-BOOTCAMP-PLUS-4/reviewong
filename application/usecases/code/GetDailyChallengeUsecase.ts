import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';
import { GetDailyChallengeDto } from './dto/GetDailyChallengeDto';

export class GetDailyChallengeUsecase {
  constructor(private codeSnippetRepository: CodeSnippetRepository) {}

  async execute(currentUserId: string): Promise<GetDailyChallengeDto> {
    try {
      const dailyChallenge = await this.codeSnippetRepository.findDailyChallenge(currentUserId);

      if (!dailyChallenge) {
        return {
          success: false,
          error: '데일리 챌린지로 사용할 수 있는 코드가 없습니다.',
        };
      }

      return {
        success: true,
        data: {
          id: dailyChallenge.id,
          title: dailyChallenge.title,
          content: dailyChallenge.content,
          user: {
            id: dailyChallenge.user.id,
            nickname: dailyChallenge.user.nickname,
            imageUrl: dailyChallenge.user.imageUrl,
            grade: dailyChallenge.user.grade.name,
          },
          categories: dailyChallenge.categories.map((c) => ({
            id: c.category.id,
            name: c.category.name,
          })),
          createdAt: dailyChallenge.createdAt,
          updatedAt: dailyChallenge.updatedAt,
        },
      };
    } catch (error) {
      console.error('데일리 챌린지 조회 실패:', error);
      return {
        success: false,
        error: '데일리 챌린지를 불러오는데 실패했습니다.',
      };
    }
  }
}
