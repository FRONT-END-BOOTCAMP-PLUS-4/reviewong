import { ReviewWithCodeAndLikesView } from '@/domain/entities/ReviewWithCodeAndLikesView';

export class GetUserReviewsDto {
  constructor(
    public success: boolean,
    public data?: {
      reviews: ReviewWithCodeAndLikesView[];
      totalCount: number;
      page: number;
      pageSize: number;
    } | null,
    public error?: string | null
  ) {}
}
