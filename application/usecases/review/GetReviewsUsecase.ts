import { ReviewRepository } from '@/domain/repositories/ReviewRepository';
import { GetReviewDto } from './dto/GetReviewsDto';

export class GetReviewsUsecase {
  constructor(private reviewRepository: ReviewRepository) {}

  async execute({ codeId, parentId }: { codeId: number; parentId: number }): Promise<GetReviewDto> {
    try {
      const reviews = parentId
        ? await this.reviewRepository.findAllByParentId(parentId)
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
