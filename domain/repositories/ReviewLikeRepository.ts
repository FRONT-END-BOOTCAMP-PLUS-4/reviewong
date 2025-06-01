export interface ReviewLikeRepository {
  create(userId: string, reviewId: number, authorId: string): Promise<boolean>;
  delete(userId: string, reviewId: number, authorId: string): Promise<boolean>;
}
