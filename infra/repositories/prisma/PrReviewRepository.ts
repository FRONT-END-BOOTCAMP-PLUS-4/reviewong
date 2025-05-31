import { ReviewRepository } from '@/domain/repositories/ReviewRepository';
import { PrismaClient } from '@/prisma/generated';
import { CreateReviewDto } from '@/application/usecases/review/dto/CreateReviewDto';
import { ReviewView } from '@/domain/entities/ReviewView';
import { ReviewWithCodeAndLikesView } from '@/domain/entities/ReviewWithCodeAndLikesView';
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

  async findUserFirst(userId: string, codeId: number) {
    return this.prisma.review.findFirst({
      where: {
        userId,
        codeId,
        parentId: null, // 최상위 리뷰만
      },
      orderBy: {
        createdAt: 'asc', // 오래된 순
      },
    });
  }

  async findByUserId(
    userId: string,
    page: number,
    pageSize: number
  ): Promise<[ReviewWithCodeAndLikesView[], number]> {
    const [reviews, totalCount] = await this.prisma.$transaction([
      this.prisma.review.findMany({
        where: { userId },
        select: {
          id: true,
          content: true,
          createdAt: true,
          codeId: true,
          codeSnippet: { select: { title: true } },
          _count: { select: { likes: true } },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      this.prisma.review.count({ where: { userId } }),
    ]);

    return [
      reviews.map((r) => ({
        id: r.id,
        content: r.content,
        createdAt: r.createdAt,
        codeId: r.codeId,
        codeTitle: r.codeSnippet.title,
        likeCount: r._count.likes,
      })),
      totalCount,
    ];
  }

  async findByUserNickname(
    nickname: string,
    page: number,
    pageSize: number
  ): Promise<[ReviewWithCodeAndLikesView[], number]> {
    const [reviews, totalCount] = await this.prisma.$transaction([
      this.prisma.review.findMany({
        where: {
          user: {
            nickname,
          },
        },
        select: {
          id: true,
          content: true,
          createdAt: true,
          codeId: true,
          codeSnippet: {
            select: {
              title: true,
            },
          },
          _count: {
            select: {
              likes: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),

      this.prisma.review.count({
        where: {
          user: {
            nickname,
          },
        },
      }),
    ]);

    return [
      reviews.map((r) => ({
        id: r.id,
        content: r.content,
        createdAt: r.createdAt,
        codeId: r.codeId,
        codeTitle: r.codeSnippet.title,
        likeCount: r._count.likes,
      })),
      totalCount,
    ];
  }

  async update(id: number, content: Partial<{ content: string }>) {
    const result = await this.prisma.review.update({
      where: { id },
      data: content,
    });
    return !!result;
  }

  async delete(id: number, userId: string): Promise<void> {
    const review = await this.prisma.review.findUnique({
      where: { id },
      select: { userId: true },
    });

    if (!review) {
      throw new Error('리뷰를 찾을 수 없습니다.');
    }

    const userReviewCountData = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { reviewCount: true },
    });

    if (userReviewCountData && userReviewCountData.reviewCount > 0) {
      await this.prisma.$transaction([
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
    } else {
      await this.prisma.review.delete({
        where: { id },
      });
    }
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

  async countGroupedByDate(userId: string): Promise<{ date: string; count: number }[]> {
    const results = await this.prisma.$queryRawUnsafe<{ date: string; count: number }[]>(
      `
    SELECT DATE("created_at") AS date, COUNT(*) as count
    FROM "reviews"
    WHERE "user_id" = $1
    AND "parent_id" IS NULL
    GROUP BY DATE("created_at")
    ORDER BY DATE("created_at") ASC
    `,
      userId
    );

    return results.map((r) => ({
      date: r.date,
      count: Number(r.count),
    }));
  }
  async countGroupedByDateByNickname(nickname: string): Promise<{ date: string; count: number }[]> {
    const results = await this.prisma.$queryRawUnsafe<{ date: string; count: number }[]>(
      `
    SELECT DATE(r."created_at") AS date, COUNT(*) AS count
    FROM "reviews" r
    JOIN "users" u ON r."user_id" = u."id"
    WHERE u."nickname" = $1
      AND r."parent_id" IS NULL
    GROUP BY DATE(r."created_at")
    ORDER BY DATE(r."created_at") ASC
    `,
      nickname
    );

    return results.map((r) => ({
      date: r.date,
      count: Number(r.count),
    }));
  }

  async findReviewLikedIdsByUserId(userId: string, reviewIds: number[]): Promise<number[]> {
    if (!userId) {
      return [];
    }

    const likes = await this.prisma.reviewLike.findMany({
      where: {
        userId,
        reviewId: { in: reviewIds }, // 주어진 리뷰 ID 목록에 해당하는 좋아요만 조회
      },
      select: { reviewId: true },
    });

    return likes.map((like) => like.reviewId);
  }
}
