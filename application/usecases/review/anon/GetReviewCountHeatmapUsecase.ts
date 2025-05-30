import { ReviewRepository } from '@/domain/repositories/ReviewRepository';
import { GetReviewCountHeatmapDto } from '../dto/GetReviewCountHeatmapDto';

export class GetReviewCountHeatmapUsecase {
  constructor(private reviewRepository: ReviewRepository) {}

  async execute(nickname: string): Promise<GetReviewCountHeatmapDto> {
    try {
      const heatmapData = await this.reviewRepository.countGroupedByDateByNickname(nickname);

      return {
        success: true,
        data: heatmapData,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get review activity heatmap',
      };
    }
  }
}
