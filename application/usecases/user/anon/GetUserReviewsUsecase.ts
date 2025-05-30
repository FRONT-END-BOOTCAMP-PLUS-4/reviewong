import { ReviewRepository } from '@/domain/repositories/ReviewRepository';
import { GetUserReviewsDto } from '../dto/GetUserReviewsDto';
export class GetUserReviewsUseCase {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async execute(nickname: string, page: number, pageSize: number): Promise<GetUserReviewsDto> {
    try {
      const [reviews, totalCount] = await this.reviewRepository.findByUserNickname(
        nickname,
        page,
        pageSize
      );

      return new GetUserReviewsDto(true, {
        reviews,
        totalCount,
        page,
        pageSize,
      });
    } catch (error) {
      return new GetUserReviewsDto(
        false,
        null,
        error instanceof Error ? error.message : 'Failed to get user reviews'
      );
    }
  }
}
