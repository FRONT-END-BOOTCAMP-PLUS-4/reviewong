import { ReviewRepository } from '@/domain/repositories/ReviewRepository';

export class DeleteReviewUsecase {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async execute(reviewId: number, userId: string): Promise<void> {
    try {
      const review = await this.reviewRepository.findById(reviewId);
      if (!review) {
        throw new Error('리뷰를 찾을 수 없습니다.');
      }
      if (review.userId !== userId) {
        throw new Error('리뷰 삭제 권한이 없습니다.');
      }
      const success = await this.reviewRepository.delete(reviewId);
      return success;
    } catch (error) {
      console.error('리뷰 삭제 실패:', error);
      throw new Error('리뷰 삭제 중 오류가 발생했습니다.');
    }
  }
}
