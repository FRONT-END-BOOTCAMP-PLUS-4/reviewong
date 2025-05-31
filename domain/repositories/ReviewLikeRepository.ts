export interface ReviewLikeRepository {
  create(userId: string, reviewId: number): Promise<boolean>;
  delete(userId: string, reviewId: number): Promise<boolean>;
}
