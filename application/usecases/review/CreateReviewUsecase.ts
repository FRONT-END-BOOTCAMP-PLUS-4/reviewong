import { ReviewRepository } from '@/domain/repositories/ReviewRepository';
import { CreateReviewDto } from './dto/CreateReviewDto';

export class CreateReviewUsecase {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async execute(createReviewDto: CreateReviewDto): Promise<CreateReviewDto> {
    const { codeId, content, parentId } = createReviewDto;

    const newReview = await this.reviewRepository.create({
      userId: createReviewDto.userId,
      codeId,
      content,
      parentId: parentId ?? null,
    });

    return newReview;
  }
}
