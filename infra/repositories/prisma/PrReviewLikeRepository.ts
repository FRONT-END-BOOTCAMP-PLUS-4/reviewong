import { ReviewLikeRepository } from '@/domain/repositories/ReviewLikeRepository';
import { PrismaClient } from '@/prisma/generated';

export class PrReviewLikeRepository implements ReviewLikeRepository {
  private prisma = new PrismaClient();
  /**
   * 리뷰 좋아요 추가
   * @param userId 유저 ID
   * @param reviewId 리뷰 ID
   * @returns boolean 좋아요 상태(true면 좋아요됨, false면 취소됨)
   */
  async create(userId: string, reviewId: number, authorId: string): Promise<boolean> {
    await this.prisma.$transaction([
      this.prisma.reviewLike.create({
        data: {
          userId,
          reviewId,
        },
      }),
      this.prisma.user.update({
        where: { id: authorId },
        data: { likeCount: { increment: 1 } }, // 리뷰 좋아요 시 사용자 좋아요 수 증가
      }),
    ]);

    return true;
  }

  /**
   * 리뷰 좋아요 삭제
   * @param userId 유저 ID
   * @param reviewId 리뷰 ID
   * @returns boolean 좋아요 상태(true면 좋아요가 삭제됨, false면 삭제 실패)
   */

  async delete(userId: string, reviewId: number, authorId: string): Promise<boolean> {
    try {
      await this.prisma.$transaction([
        this.prisma.reviewLike.delete({
          where: {
            userId_reviewId: {
              userId,
              reviewId,
            },
          },
        }),
        this.prisma.user.update({
          where: { id: authorId },
          data: { likeCount: { decrement: 1 } }, // 리뷰 좋아요 취소 시 사용자 좋아요 수 감소
        }),
      ]);
      return true;
    } catch {
      console.error('리뷰 좋아요 삭제 실패:');
      return false;
    }
  }
}
