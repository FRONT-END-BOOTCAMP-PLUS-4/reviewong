import { ReviewRepository } from '@/domain/repositories/ReviewRepository';
import { GetReviewDto } from './dto/GetReviewsDto';

export class GetReviewsUsecase {
  constructor(private reviewRepository: ReviewRepository) {}

  async execute({ codeId, isReply }: { codeId: number; isReply: boolean }): Promise<GetReviewDto> {
    try {
      const reviews = isReply
        ? await this.reviewRepository.findAllByParentId(codeId)
        : await this.reviewRepository.findAllByCodeId(codeId);

      return {
        success: true,
        data: reviews,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get reviews',
      };
    }
  }
}
