import { ReviewRepository } from '@/domain/repositories/ReviewRepository';

export class EditReviewUsecase {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async execute(id: number, content: string, userId: string): Promise<boolean> {
    try {
      const review = await this.reviewRepository.findById(id);
      if (!review) {
        throw new Error('리뷰를 찾을 수 없습니다.');
      }
      if (review.userId !== userId) {
        throw new Error('리뷰 수정 권한이 없습니다.');
      }
      const success = await this.reviewRepository.update(id, { content });
      return success;
    } catch (error) {
      console.error('리뷰 수정 실패:', error);
      throw new Error('리뷰 수정 중 오류가 발생했습니다.');
    }
  }
}
