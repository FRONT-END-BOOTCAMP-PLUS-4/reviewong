import { ReviewRepository } from '@/domain/repositories/ReviewRepository';
import { PrismaClient } from '@/prisma/generated';
import { CreateReviewDto } from '@/application/usecases/review/dto/CreateReviewDto';
import { ReviewView } from '@/domain/entities/ReviewView';
export class PrReviewRepository implements ReviewRepository {
  private prisma = new PrismaClient();

  async create(review: CreateReviewDto) {
    const [createdReview] = await this.prisma.$transaction([
      this.prisma.review.create({
        data: {
          userId: review.userId,
          codeId: review.codeId,
          content: review.content,
          parentId: review.parentId ?? null,
        },
      }),
      this.prisma.user.update({
        where: { id: review.userId },
        data: { reviewCount: { increment: 1 } }, // 리뷰 작성 시 사용자 리뷰 수 증가
      }),
    ]);
    return createdReview;
  }

  async findById(id: number) {
    return this.prisma.review.findUnique({
      where: { id },
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
    const review = await this.prisma.review.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!review) {
      throw new Error('리뷰를 찾을 수 없습니다.');
    }

    this.prisma.$transaction([
      this.prisma.review.delete({
        where: { id },
      }),
      this.prisma.user.update({
        where: { id: review.userId },
        data: {
          reviewCount: { decrement: 1 },
        },
      }),
    ]);
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

  async findLatestTwoByCodeId(codeId: number): Promise<ReviewView[]> {
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
            replies: true,
            likes: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 2,
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
}
