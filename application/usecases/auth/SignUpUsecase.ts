import { UserRepository } from '@/domain/repositories/UserRepository';
import { SignUpDto } from '@/application/usecases/auth/dto/SignUpDto';
import bcrypt from 'bcryptjs';

export class SignUpUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(dto: SignUpDto): Promise<string> {
    // 이메일 중복 체크
    const existingUser = await this.userRepository.findByEmail(dto.email);
    if (existingUser) {
      throw new Error('이미 존재하는 이메일입니다.');
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    // 사용자 생성
    const userId = await this.userRepository.create({
      email: dto.email,
      password: hashedPassword,
      nickname: dto.nickname,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      gradeId: 1,
      imageUrl: null,
      likeCount: 0,
      reviewCount: 0,
    });

    return userId;
  }
}
