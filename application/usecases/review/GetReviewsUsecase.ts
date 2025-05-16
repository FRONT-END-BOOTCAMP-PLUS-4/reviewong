import { ReviewRepository } from '@/domain/repositories/ReviewRepository';
import { ReviewWithRelations } from '@/infra/repositories/prisma/PrReviewRepository';

export interface GetReviewsResponse {
  success: boolean;
  data?: ReviewWithRelations[];
  error?: string;
}

export class GetReviewsUsecase {
  constructor(private reviewRepository: ReviewRepository) {}

  async execute(codeId: number): Promise<GetReviewsResponse> {
    try {
      let reviews;
      if (true) {
        reviews = await this.reviewRepository.findAllByCodeId(codeId);
      } else {
        reviews = await this.reviewRepository.findAllByParentId(codeId);
      }

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
