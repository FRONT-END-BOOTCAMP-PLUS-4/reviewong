import { PrismaClient, CodeSnippet } from '@/prisma/generated';
import { CodeSnippetRepository } from '@/domain/repositories/CodeSnippetRepository';

export class PrCodeSnippetRepository implements CodeSnippetRepository {
  private prisma: PrismaClient;

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

  async findById(id: number): Promise<CodeSnippet | null> {
    return await this.prisma.codeSnippet.findUnique({
      where: { id },
    });
  }

  async findByUserId(userId: string): Promise<CodeSnippet[]> {
    return await this.prisma.codeSnippet.findMany({
      where: { userId },
    });
  }

  async findAll(): Promise<CodeSnippet[]> {
    return await this.prisma.codeSnippet.findMany();
  }

  async update(id: number, updatedCodeSnippet: Partial<CodeSnippet>): Promise<boolean> {
    try {
      await this.prisma.codeSnippet.update({
        where: { id },
        data: updatedCodeSnippet,
      });
      return true;
    } catch (error) {
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
      return false;
    }
  }
}
