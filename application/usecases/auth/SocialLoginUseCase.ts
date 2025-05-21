import { IUserRepository } from '@/domain/repositories/IUserRepository';

export class SocialLoginUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(userData: {
    id: string;
    email: string;
    name: string | null;
    image: string | null;
  }) {
    const existingUser = await this.userRepository.findByEmail(userData.email);

    if (!existingUser) {
      await this.userRepository.createSocialUser({
        id: userData.id,
        email: userData.email,
        nickname: userData.name || userData.email.split('@')[0],
        image_url: userData.image,
      });
    }

    return true;
  }
}
