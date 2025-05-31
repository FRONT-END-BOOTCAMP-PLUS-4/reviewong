import { ReviewLikeRepository } from '@/domain/repositories/ReviewLikeRepository';

export class CreateReviewLikeUsecase {
  constructor(private reviewLikeRepository: ReviewLikeRepository) {}

  async execute(userId: string, reviewId: number): Promise<{ success: boolean; error?: string }> {
    try {
      await this.reviewLikeRepository.create(userId, reviewId);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to create review like',
      };
    }
  }
}
