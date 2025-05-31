import { ReviewRepository } from '@/domain/repositories/ReviewRepository';
import { GetReviewDto } from './dto/GetReviewsDto';

export class GetReviewsUsecase {
  constructor(private reviewRepository: ReviewRepository) {}

  async execute({
    codeId,
    parentId,
    userId,
  }: {
    codeId: number;
    parentId: number | null;
    userId?: string | null;
  }): Promise<GetReviewDto> {
    try {
      const reviews = parentId
        ? await this.reviewRepository.findAllByParentId(parentId)
        : await this.reviewRepository.findAllByCodeId(codeId);

      const reviewIds = reviews.map((r) => r.id);

      const likedIds = await this.reviewRepository.findReviewLikedIdsByUserId(
        userId ?? null,
        reviewIds
      ); // 로그인한 유저가 좋아요한 리뷰

      // isLiked 추가해서 반환
      const reviewsWithIsLiked = reviews.map((review) => ({
        ...review,
        isLiked: likedIds.includes(review.id),
      }));

      return {
        success: true,
        data: reviewsWithIsLiked,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get reviews',
      };
    }
  }
}
