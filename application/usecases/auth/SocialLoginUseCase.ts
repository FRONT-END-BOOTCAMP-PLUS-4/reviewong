import { PrUserRepository } from '@/infra/repositories/prisma/PrUserRepository';

export class SocialLoginUseCase {
  constructor(private readonly userRepository: PrUserRepository) {}

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
