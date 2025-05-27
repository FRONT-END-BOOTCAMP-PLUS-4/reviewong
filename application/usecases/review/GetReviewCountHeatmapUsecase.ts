import { ReviewRepository } from '@/domain/repositories/ReviewRepository';
import { GetReviewCountHeatmap } from './dto/GetReviewCountHeatmap';

export class GetReviewCountHeatmapUsecase {
  constructor(private reviewRepository: ReviewRepository) {}

  async execute(userId: string): Promise<GetReviewCountHeatmap> {
    try {
      const heatmapData = await this.reviewRepository.countGroupedByDate(userId);

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
