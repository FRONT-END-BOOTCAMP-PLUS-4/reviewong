import { PrismaClient, User } from '@/prisma/generated';
import { UserRepository } from '@/domain/repositories/UserRepository';

export class PrUserRepository implements UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(user: User): Promise<string> {
    const createdUser = await this.prisma.user.create({
      data: user,
    });
    return createdUser.id;
  }

  async login(email: string, password: string): Promise<User | null> {
    return await this.prisma.user.findFirst({
      where: {
        email: email,
        password: password,
      },
    });
  }

  async findById(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async update(id: string, updatedUser: Partial<User>): Promise<boolean> {
    try {
      await this.prisma.user.update({
        where: { id },
        data: updatedUser,
      });
      return true;
    } catch (error) {
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
      return false;
    }
  }
}
