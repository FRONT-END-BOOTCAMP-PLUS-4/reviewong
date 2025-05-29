import { ReviewRepository } from '@/domain/repositories/ReviewRepository';
import { GetReviewDto } from './dto/GetReviewsDto';

export class GetLatestReviewsUsecase {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async execute(codeId: number): Promise<GetReviewDto> {
    try {
      const reviews = await this.reviewRepository.findLatestTwoByCodeId(codeId);

      return new GetReviewDto(true, reviews);
    } catch (error) {
      return new GetReviewDto(
        false,
        undefined,
        error instanceof Error ? error.message : '최근 리뷰를 불러오는데 실패했습니다.'
      );
    }
  }
}
