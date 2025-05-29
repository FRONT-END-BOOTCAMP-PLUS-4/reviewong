import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';
import { ReviewRepository } from '@/domain/repositories/ReviewRepository';
import { ReviewView } from '@/domain/entities/ReviewView';
import { GetCodeSnippetUsecase } from './GetCodeSnippetUsecase';
import { CodeSnippetDto } from './dto/GetCodeSnippetDto';

export class GetDailyChallengeUsecase {
  constructor(
    private codeSnippetRepository: CodeSnippetRepository,
    private reviewRepository: ReviewRepository
  ) {}

  async execute(currentUserId?: string): Promise<{
    success: boolean;
    data?: {
      codeSnippet: CodeSnippetDto | undefined;
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

      // 3. 최신 리뷰 2개만 조회
      const dailyCodeReview = await this.reviewRepository.findLatestTwoByCodeId(codeId);

      // 4. GetCodeSnippetUsecase를 사용하여 DTO 변환
      const getCodeSnippetUsecase = new GetCodeSnippetUsecase(this.codeSnippetRepository);
      const result = await getCodeSnippetUsecase.execute(codeId);

      return {
        success: true,
        data: {
          codeSnippet: result.data,
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
