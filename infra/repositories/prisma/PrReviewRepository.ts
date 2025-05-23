import { ReviewRepository } from '@/domain/repositories/ReviewRepository';
import { PrismaClient } from '@/prisma/generated';
import { CreateReviewDto } from '@/application/usecases/review/dto/CreateReviewDto';
import { ReviewView } from '@/domain/entities/ReviewView';
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

  async update(id: number, content: Partial<{ content: string }>) {
    const result = await this.prisma.review.update({
      where: { id },
      data: content,
    });
    return !!result;
  }

  async delete(id: number) {
    await this.prisma.review.delete({
      where: { id },
    });
  }

  async findAllByCodeId(codeId: number): Promise<ReviewView[]> {
    const reviews = await this.prisma.review.findMany({
      where: {
        codeId,
        parentId: null, // 최상위 리뷰만 가져오기
      },
      include: {
        user: {
          select: {
            id: true,
            nickname: true,
            imageUrl: true,
            grade: {
              select: {
                name: true,
              },
            },
          },
        },
        _count: {
          select: {
            replies: true, // 대댓글 수
            likes: true, // 좋아요 수
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return reviews.map(({ _count, ...review }) => ({
      ...review,
      user: {
        ...review.user,
        grade: review.user.grade?.name || null,
      },
      counts: {
        replies: _count.replies,
        likes: _count.likes,
      },
    }));
  }

  async findAllByParentId(parentId: number): Promise<ReviewView[]> {
    const replies = await this.prisma.review.findMany({
      where: {
        parentId,
      },
      include: {
        user: {
          select: {
            id: true,
            nickname: true,
            imageUrl: true,
            grade: {
              select: {
                name: true,
              },
            },
          },
        },
        _count: {
          select: {
            likes: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return replies.map(({ _count, ...reply }) => ({
      ...reply,
      user: {
        ...reply.user,
        grade: reply.user.grade?.name || null,
      },
      counts: {
        likes: _count.likes,
      },
    }));
  }
}
