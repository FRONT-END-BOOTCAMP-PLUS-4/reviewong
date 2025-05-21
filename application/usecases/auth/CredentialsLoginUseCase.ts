import bcrypt from 'bcryptjs';
import { UserRepository } from '@/domain/repositories/UserRepository';

export class CredentialsLoginUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(credentials: { email: string; password: string }) {
    if (!credentials.email || !credentials.password) {
      throw new Error('이메일과 비밀번호를 입력해주세요.');
    }

    const user = await this.userRepository.findByEmail(credentials.email);
    if (!user || !user.password) {
      throw new Error('이메일 또는 비밀번호가 일치하지 않습니다.');
    }

    const isCorrectPassword = await bcrypt.compare(credentials.password, user.password);
    if (!isCorrectPassword) {
      throw new Error('이메일 또는 비밀번호가 일치하지 않습니다.');
    }

    return user;
  }
}
