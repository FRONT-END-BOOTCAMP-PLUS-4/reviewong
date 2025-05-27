import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';
import { CodeSnippetWithRelations } from '@/infra/repositories/prisma/PrCodeSnippetRepository';
import { ReviewRepository } from '@/domain/repositories/ReviewRepository';
import { ReviewView } from '@/domain/entities/ReviewView';

export class GetDailyChallengeUsecase {
  constructor(
    private codeSnippetRepository: CodeSnippetRepository,
    private reviewRepository: ReviewRepository
  ) {}

  async execute(currentUserId?: string): Promise<{
    success: boolean;
    data?: {
      codeSnippet: CodeSnippetWithRelations;
      dailyCodeReview: ReviewView[];
    };
    error?: string;
  }> {
    try {
      // 1. 데일리 챌린지 코드 ID 조회
      const codeId = await this.codeSnippetRepository.findDailyChallengeId(currentUserId);
      if (!codeId) {
        return { success: false, error: 'No available code snippets for challenge' };
      }

      // 2. 코드 스니펫 상세 정보 조회
      const codeSnippet = await this.codeSnippetRepository.findById(codeId);
      if (!codeSnippet) {
        return { success: false, error: 'Code snippet not found' };
      }

      // 3. 리뷰 개수 조회
      const dailyCodeReview = await this.reviewRepository.findAllByCodeId(codeId);

      return {
        success: true,
        data: {
          codeSnippet,
          dailyCodeReview: dailyCodeReview,
        },
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get daily challenge',
      };
    }
  }
}
