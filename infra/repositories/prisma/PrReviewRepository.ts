import { ReviewRepository } from '@/domain/repositories/ReviewRepository';
import { PrismaClient } from '@prisma/client';
import { CreateReviewDto } from '@/application/usecases/review/dto/ReviewDto';

export class PrReviewRepository implements ReviewRepository {
  private prisma = new PrismaClient();

  async create(review: CreateReviewDto) {
    return this.prisma.review.create({
      data: {
        userId: review.userId,
        codeId: review.codeId,
        content: review.content,
        parentId: review.parentId ?? null,
      },
    });
  }

  async findByUserId(userId: string) {
    return this.prisma.review.findMany({
      where: { userId },
    });
  }

  async update(id: number, updatedReview: Partial<{ content: string; parentId: number | null }>) {
    return !!(await this.prisma.review.update({
      where: { id },
      data: updatedReview,
    }));
  }

  async delete(id: number) {
    await this.prisma.review.delete({
      where: { id },
    });
  }
}
