import { ReviewView } from '@/domain/entities/ReviewView';

export class GetReviewDto {
  constructor(
    public success: boolean,
    public data?: ReviewView[],
    public error?: string | null
  ) {}
}
