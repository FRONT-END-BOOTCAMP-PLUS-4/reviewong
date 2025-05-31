import { ReviewLikeRepository } from '@/domain/repositories/ReviewLikeRepository';

export class DeleteReviewLikeUsecase {
  constructor(private reviewLikeRepository: ReviewLikeRepository) {}

  async execute(userId: string, reviewId: number): Promise<{ success: boolean; error?: string }> {
    try {
      await this.reviewLikeRepository.delete(userId, reviewId);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to delete review like',
      };
    }
  }
}
