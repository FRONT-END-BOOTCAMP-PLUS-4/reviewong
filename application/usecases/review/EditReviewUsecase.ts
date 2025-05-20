import { ReviewRepository } from '@/domain/repositories/ReviewRepository';

export class EditReviewUsecase {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async execute(id: number, content: string): Promise<boolean> {
    return this.reviewRepository.update(id, { content });
  }
}
