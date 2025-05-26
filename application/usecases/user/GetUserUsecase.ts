import { UserRepository } from '@/domain/repositories/UserRepository';
import { GetUserDto } from './dto/GetUserDto';

export class GetUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: string): Promise<GetUserDto> {
    try {
      const user = await this.userRepository.findProfileSummaryById(userId);

      if (!user) {
        return {
          success: false,
          error: 'User not found',
        };
      }

      return {
        success: true,
        data: {
          id: user.id,
          email: user.email,
          nickname: user.nickname,
          imageUrl: user.imageUrl,
          grade: user.grade,
          reviewCount: user.reviewCount,
          likeCount: user.likeCount,
          codeCount: user.codeCount,
        },
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get user profile',
      };
    }
  }
}
