import { ReviewRepository } from '@/domain/repositories/ReviewRepository';

export class DeleteReviewUsecase {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async execute(reviewId: number): Promise<void> {
    await this.reviewRepository.delete(reviewId);
  }
}
