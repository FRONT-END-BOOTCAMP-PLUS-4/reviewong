import { UserRepository } from '@/domain/repositories/UserRepository';
import { PrismaClient } from '@prisma/client';
import { User } from '@/prisma/generated';
import bcrypt from 'bcryptjs';

export class PrUserRepository implements UserRepository {
  private prisma = new PrismaClient();

  async create(user: Omit<User, 'id'>): Promise<string> {
    const createdUser = await this.prisma.user.create({
      data: {
        id: crypto.randomUUID(),
        email: user.email,
        password: user.password,
        nickname: user.nickname,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
        gradeId: user.gradeId,
        imageUrl: user.imageUrl,
        likeCount: user.likeCount,
        reviewCount: user.reviewCount,
      },
    });
    return createdUser.id;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      password: user.password,
      nickname: user.nickname,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      deletedAt: user.deletedAt,
      gradeId: user.gradeId,
      imageUrl: user.imageUrl,
      likeCount: user.likeCount,
      reviewCount: user.reviewCount,
    };
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      password: user.password,
      nickname: user.nickname,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      deletedAt: user.deletedAt,
      gradeId: user.gradeId,
      imageUrl: user.imageUrl,
      likeCount: user.likeCount,
      reviewCount: user.reviewCount,
    };
  }
  async findProfileSummaryById(id: string): Promise<{
    id: string;
    email: string;
    nickname: string;
    imageUrl: string | null;
    grade?: string;
    reviewCount: number;
    likeCount: number;
    codeCount: number;
  }> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        nickname: true,
        imageUrl: true,
        reviewCount: true,
        likeCount: true,
        grade: {
          select: { name: true },
        },
        codeSnippets: {
          select: { id: true }, // 개수만 필요하므로 id만 가져옴
        },
      },
    });

    if (!user) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      imageUrl: user.imageUrl,
      grade: user.grade?.name,
      reviewCount: user.reviewCount,
      likeCount: user.likeCount,
      codeCount: user.codeSnippets.length,
    };
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users.map((user) => ({
      id: user.id,
      email: user.email,
      password: user.password,
      nickname: user.nickname,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      deletedAt: user.deletedAt,
      gradeId: user.gradeId,
      imageUrl: user.imageUrl,
      likeCount: user.likeCount,
      reviewCount: user.reviewCount,
    }));
  }

  async update(id: string, updatedUser: Partial<User>): Promise<boolean> {
    try {
      await this.prisma.user.update({
        where: { id },
        data: {
          email: updatedUser.email,
          password: updatedUser.password,
          nickname: updatedUser.nickname,
          createdAt: updatedUser.createdAt,
          updatedAt: updatedUser.updatedAt,
          deletedAt: updatedUser.deletedAt,
          gradeId: updatedUser.gradeId,
          imageUrl: updatedUser.imageUrl,
          likeCount: updatedUser.likeCount,
          reviewCount: updatedUser.reviewCount,
        },
      });
      return true;
    } catch (error) {
      console.error('사용자 업데이트 중 오류 발생:', error);
      return false;
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.user.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      console.error('사용자 삭제 중 오류 발생:', error);
      return false;
    }
  }

  async login(email: string, password: string): Promise<User | null> {
    const user = await this.findByEmail(email);
    if (!user) {
      return null;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return null;
    }

    return user;
  }

  async createSocialUser(data: {
    id: string;
    email: string;
    nickname: string;
    image_url: string | null;
  }): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        id: data.id,
        email: data.email,
        nickname: data.nickname,
        imageUrl: data.image_url,
        password: '', // 소셜 로그인은 비밀번호가 필요 없음
        likeCount: 0,
        reviewCount: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return {
      id: user.id,
      email: user.email,
      password: user.password,
      nickname: user.nickname,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      deletedAt: user.deletedAt,
      gradeId: user.gradeId,
      imageUrl: user.imageUrl,
      likeCount: user.likeCount,
      reviewCount: user.reviewCount,
    };
  }
}
