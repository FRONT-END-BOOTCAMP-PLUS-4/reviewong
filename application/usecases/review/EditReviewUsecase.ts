import { updateReviewDto } from './dto/ReviewDto';
import { ReviewRepository } from '@/domain/repositories/ReviewRepository';

export class EditReviewUsecase {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async execute(id: number, updateReviewDto: updateReviewDto): Promise<boolean> {
    const { content, parentId } = updateReviewDto;

    const updated = await this.reviewRepository.update(id, {
      content,
      parentId,
    });

    return updated;
  }
}
