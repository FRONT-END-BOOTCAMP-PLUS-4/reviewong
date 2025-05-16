import { ReviewRepository } from '@/domain/repositories/ReviewRepository';
import { PrismaClient, Review } from '@/prisma/generated';
import { CreateReviewDto } from '@/application/usecases/review/dto/ReviewDto';
export type ReviewWithRelations = Review & {
  user: {
    id: string;
    nickname: string;
    imageUrl: string | null;
  };
  _count: {
    replies: number;
    likes: number;
  };
};
export type ReplyWithRelations = Omit<ReviewWithRelations, '_count'> & {
  _count: Omit<ReviewWithRelations['_count'], 'replies'>;
};
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

  async findAllByCodeId(codeId: number): Promise<ReviewWithRelations[]> {
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

    return reviews;
  }

  async findAllByParentId(parentId: number): Promise<ReplyWithRelations[]> {
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

    return replies;
  }
}
