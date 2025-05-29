import { ReviewWithCodeAndLikes } from '@/domain/entities/ReviewWithCodeAndLikes';

export class GetUserReviewsDto {
  constructor(
    public success: boolean,
    public data?: {
      reviews: ReviewWithCodeAndLikes[];
      totalCount: number;
      page: number;
      pageSize: number;
    } | null,
    public error?: string | null
  ) {}
}
