import { UserRepository } from '@/domain/repositories/UserRepository';
import { GetUserRankingDto } from '@/application/usecases/user/dto/GetUserRankingDto';

export class GetUserRankingUsecase {
  constructor(private readonly userRepository: UserRepository) {}

  async executeByLikes(rankingCount: number): Promise<GetUserRankingDto[]> {
    const users = await this.userRepository.getUserRankingByLikes(rankingCount);
    return users.map((user) => ({
      profileImageUrl: user.imageUrl,
      nickname: user.nickname,
      gradeId: user.gradeId,
      likeCount: user.likeCount,
      reviewCount: undefined,
    }));
  }
  async executeByReviews(rankingCount: number): Promise<GetUserRankingDto[]> {
    const users = await this.userRepository.getUserRankingByReviews(rankingCount);
    return users.map((user) => ({
      profileImageUrl: user.imageUrl,
      nickname: user.nickname,
      gradeId: user.gradeId,
      likeCount: undefined,
      reviewCount: user.reviewCount,
    }));
  }
}
