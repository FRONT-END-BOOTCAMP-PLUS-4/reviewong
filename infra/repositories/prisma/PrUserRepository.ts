import { UserRepository } from '@/domain/repositories/UserRepository';
import { PrismaClient } from '@prisma/client';
import { User } from '@/prisma/generated';
import bcrypt from 'bcryptjs';

export class PrUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(user: Omit<User, 'id'>): Promise<string> {
    const createdUser = await this.prisma.users.create({
      data: {
        id: crypto.randomUUID(),
        email: user.email,
        password: user.password,
        nickname: user.nickname,
        created_at: user.createdAt,
        updated_at: user.updatedAt,
        deleted_at: user.deletedAt,
        grade_id: user.gradeId,
        image_url: user.imageUrl,
        like_count: user.likeCount,
        review_count: user.reviewCount,
      },
    });
    return createdUser.id;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.users.findUnique({
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
      createdAt: user.created_at,
      updatedAt: user.updated_at,
      deletedAt: user.deleted_at,
      gradeId: user.grade_id,
      imageUrl: user.image_url,
      likeCount: user.like_count,
      reviewCount: user.review_count,
    };
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.users.findUnique({
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
      createdAt: user.created_at,
      updatedAt: user.updated_at,
      deletedAt: user.deleted_at,
      gradeId: user.grade_id,
      imageUrl: user.image_url,
      likeCount: user.like_count,
      reviewCount: user.review_count,
    };
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.users.findMany();
    return users.map((user) => ({
      id: user.id,
      email: user.email,
      password: user.password,
      nickname: user.nickname,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
      deletedAt: user.deleted_at,
      gradeId: user.grade_id,
      imageUrl: user.image_url,
      likeCount: user.like_count,
      reviewCount: user.review_count,
    }));
  }

  async update(id: string, updatedUser: Partial<User>): Promise<boolean> {
    try {
      await this.prisma.users.update({
        where: { id },
        data: {
          email: updatedUser.email,
          password: updatedUser.password,
          nickname: updatedUser.nickname,
          created_at: updatedUser.createdAt,
          updated_at: updatedUser.updatedAt,
          deleted_at: updatedUser.deletedAt,
          grade_id: updatedUser.gradeId,
          image_url: updatedUser.imageUrl,
          like_count: updatedUser.likeCount,
          review_count: updatedUser.reviewCount,
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
      await this.prisma.users.delete({
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
    const user = await this.prisma.users.create({
      data: {
        id: data.id,
        email: data.email,
        nickname: data.nickname,
        image_url: data.image_url,
        password: '', // 소셜 로그인은 비밀번호가 필요 없음
        like_count: 0,
        review_count: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return {
      id: user.id,
      email: user.email,
      password: user.password,
      nickname: user.nickname,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
      deletedAt: user.deleted_at,
      gradeId: user.grade_id,
      imageUrl: user.image_url,
      likeCount: user.like_count,
      reviewCount: user.review_count,
    };
  }
}
