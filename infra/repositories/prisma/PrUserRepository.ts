import { UserRepository } from '@/domain/repositories/UserRepository';
import { PrismaClient, User } from '@/prisma/generated';
import bcrypt from 'bcryptjs';

export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaClient) {}

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
    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async update(id: string, updatedUser: Partial<User>): Promise<boolean> {
    try {
      await this.prisma.user.update({
        where: { id },
        data: updatedUser,
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
}
