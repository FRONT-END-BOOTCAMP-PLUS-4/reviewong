import { PrismaClient, CodeSnippet, CodeSnippetCategory } from '@/prisma/generated';
import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';
import { CodeListFilter } from '@/domain/filters/CodeListFilter';
export type CodeSnippetWithRelations = CodeSnippet & {
  user: {
    id: string;
    nickname: string;
    imageUrl: string | null;
    grade: {
      name: string;
    } | null;
  };
  categories: (CodeSnippetCategory & {
    category: {
      id: number;
      name: string;
    };
  })[];
};
export type CodeSnippetWithReviewCount = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  categories: { id: number; name: string }[];
  reviewCount: number;
};
export type CodeSnippetWithCount = CodeSnippetWithRelations & {
  reviewCount: number;
};
export class PrCodeSnippetRepository implements CodeSnippetRepository {
  private prisma: PrismaClient;
  private static currentDate: string | null = null;
  private static currentChallengeId: number | null = null;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: {
    userId: string;
    title: string;
    content: string;
    categories: number[];
  }): Promise<number> {
    try {
      // 카테고리 존재 여부 먼저 확인
      const existingCategories = await this.prisma.category.findMany({
        where: {
          id: {
            in: data.categories,
          },
        },
        select: {
          id: true,
        },
      });

      if (existingCategories.length === 0 && data.categories.length > 0) {
        throw new Error('None of the provided category IDs exist in the database');
      }

      // 존재하는 카테고리 ID만 필터링
      const validCategoryIds = existingCategories.map((cat) => cat.id);

      // 코드 스니펫 먼저 생성
      const createdSnippet = await this.prisma.codeSnippet.create({
        data: {
          userId: data.userId,
          title: data.title,
          content: data.content,
        },
      });

      // 카테고리 연결이 있는 경우, 연결 테이블 레코드 생성
      if (validCategoryIds.length > 0) {
        // 코드 스니펫과 카테고리 연결
        const categoryConnections = validCategoryIds.map((categoryId) => {
          return {
            codeId: createdSnippet.id,
            categoryId: categoryId,
          };
        });

        // 연결 테이블에 레코드 생성
        await this.prisma.codeSnippetCategory.createMany({
          data: categoryConnections,
        });
      }

      return createdSnippet.id;
    } catch (error) {
      console.error('Error creating code snippet:', error);
      throw error;
    }
  }

  async findById(id: number): Promise<CodeSnippetWithRelations | null> {
    return await this.prisma.codeSnippet.findUnique({
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
        categories: {
          include: {
            category: true,
          },
        },
      },
    });
  }
  async findAllByUserId(
    userId: string,
    page: number,
    pageSize: number
  ): Promise<[CodeSnippetWithReviewCount[], number]> {
    const [snippets, totalCount] = await Promise.all([
      this.prisma.codeSnippet.findMany({
        where: { userId },
        include: {
          user: true,
          categories: { include: { category: true } },
          _count: { select: { reviews: true } },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      this.prisma.codeSnippet.count({ where: { userId } }),
    ]);

    const data = snippets.map((snippet) => ({
      id: snippet.id,
      title: snippet.title,
      content: snippet.content,
      createdAt: snippet.createdAt,
      categories: snippet.categories.map((c) => ({
        id: c.category.id,
        name: c.category.name,
      })),
      reviewCount: snippet._count.reviews,
    }));

    return [data, totalCount];
  }

  async findAllByUserNickname(
    nickname: string,
    page: number,
    pageSize: number
  ): Promise<[CodeSnippetWithReviewCount[], number]> {
    const [snippets, totalCount] = await Promise.all([
      this.prisma.codeSnippet.findMany({
        where: {
          user: {
            nickname,
          },
        },
        include: {
          user: {
            select: {
              id: true,
              nickname: true,
            },
          },
          categories: {
            include: {
              category: true,
            },
          },
          _count: {
            select: {
              reviews: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      this.prisma.codeSnippet.count({
        where: {
          user: {
            nickname,
          },
        },
      }),
    ]);

    const data = snippets.map((snippet) => ({
      id: snippet.id,
      title: snippet.title,
      content: snippet.content,
      createdAt: snippet.createdAt,
      categories: snippet.categories.map((c) => ({
        id: c.category.id,
        name: c.category.name,
      })),
      reviewCount: snippet._count.reviews,
      user: {
        id: snippet.user.id,
        nickname: snippet.user.nickname,
      },
    }));

    return [data, totalCount];
  }

  /*
  카테코리별 코드 조회할 수 있도록 필터 적용
  */
  async findAll(filter: CodeListFilter): Promise<CodeSnippetWithCount[]> {
    const snippets = await this.prisma.codeSnippet.findMany({
      where: {
        categories: {
          some: {
            category: {
              id: {
                in: filter.categories,
              },
            },
          },
        },
      },
      include: {
        _count: {
          select: {
            reviews: true,
          },
        },
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
        categories: {
          include: {
            category: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
    return snippets.map((snippet) => ({
      ...snippet,
      reviewCount: snippet._count.reviews,
      categories: snippet.categories.map((c) => ({
        ...c,
        category: {
          id: c.category.id,
          name: c.category.name,
        },
      })),
      user: snippet.user,
    }));
  }

  async update(
    id: number,
    data: {
      title?: string;
      content?: string;
      categories?: number[];
    }
  ): Promise<boolean> {
    try {
      const { categories, ...updateData } = data;

      return await this.prisma.$transaction(async (tx) => {
        // 1. 카테고리 처리
        if (categories !== undefined) {
          const existing = await tx.codeSnippetCategory.findMany({
            where: { codeId: id },
            select: { categoryId: true },
          });

          const existingIds = existing.map((c) => c.categoryId).sort();
          const newIds = [...categories].sort();

          const changed = JSON.stringify(existingIds) !== JSON.stringify(newIds);

          if (changed) {
            await tx.codeSnippetCategory.deleteMany({ where: { codeId: id } });

            if (newIds.length > 0) {
              await tx.codeSnippetCategory.createMany({
                data: newIds.map((categoryId) => ({ codeId: id, categoryId })),
                skipDuplicates: true,
              });
            }
          }
        }

        // 2. 본문 업데이트
        if (Object.keys(updateData).length > 0) {
          await tx.codeSnippet.update({
            where: { id },
            data: updateData,
          });
        }

        return true;
      });
    } catch (error) {
      console.error('Error updating code snippet:', error);
      return false;
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.prisma.codeSnippet.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      console.log('Error deleting code snippet:', error);
      return false;
    }
  }

  async findDailyChallenge(currentUserId: string): Promise<CodeSnippetWithRelations | null> {
    const codeId = await this.findDailyChallengeId(currentUserId);
    if (!codeId) {
      return null;
    }
    return this.findById(codeId);
  }

  async findDailyChallengeId(currentUserId?: string): Promise<number | null> {
    // 오늘 날짜 확인
    const today = new Date().toDateString();

    // 오늘의 데일리 챌린지가 이미 선택되어 있다면 그대로 반환
    if (
      PrCodeSnippetRepository.currentDate === today &&
      PrCodeSnippetRepository.currentChallengeId
    ) {
      return PrCodeSnippetRepository.currentChallengeId;
    }

    // 새로운 데일리 챌린지 선택
    let codeId: number | null = null;

    if (!currentUserId) {
      // 비회원인 경우 모든 코드 중에서 랜덤 선택
      const totalCodes = await this.prisma.codeSnippet.count();
      if (totalCodes === 0) {
        return null;
      }

      const skip = Math.floor(Math.random() * totalCodes);
      const code = await this.prisma.codeSnippet.findFirst({
        skip: skip,
        select: {
          id: true,
        },
      });

      codeId = code?.id ?? null;
    } else {
      // 회원인 경우 조건에 맞는 코드 선택
      // 1. 현재 사용자가 작성한 코드 ID 목록 조회
      const userCodeIds = await this.prisma.codeSnippet
        .findMany({
          where: { userId: currentUserId },
          select: { id: true },
        })
        .then((codes) => codes.map((code) => code.id));

      // 2. 현재 사용자가 리뷰를 작성한 코드 ID 목록 조회
      const reviewedCodeIds = await this.prisma.review
        .findMany({
          where: { userId: currentUserId },
          select: { codeId: true },
        })
        .then((reviews) => reviews.map((review) => review.codeId));

      // 3. 제외할 코드 ID 목록 합치기
      const excludedCodeIds = [...new Set([...userCodeIds, ...reviewedCodeIds])];

      // 4. 남은 코드 중 랜덤하게 하나 선택
      const totalCodes = await this.prisma.codeSnippet.count({
        where: {
          id: {
            notIn: excludedCodeIds,
          },
        },
      });

      if (totalCodes === 0) {
        return null;
      }

      const skip = Math.floor(Math.random() * totalCodes);

      const code = await this.prisma.codeSnippet.findFirst({
        where: {
          id: {
            notIn: excludedCodeIds,
          },
        },
        skip: skip,
        select: {
          id: true,
        },
      });

      codeId = code?.id ?? null;
    }

    // 선택된 코드 ID를 저장
    if (codeId) {
      PrCodeSnippetRepository.currentDate = today;
      PrCodeSnippetRepository.currentChallengeId = codeId;
    }

    return codeId;
  }

  async findUserIdByCodeId(id: number): Promise<string | undefined | null> {
    const result = await this.prisma.codeSnippet.findUnique({
      where: { id },
      select: {
        user: {
          select: {
            id: true,
          },
        },
      },
    });
    return result?.user.id;
  }
}
