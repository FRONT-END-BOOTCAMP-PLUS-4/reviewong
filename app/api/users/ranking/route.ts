import { NextRequest, NextResponse } from 'next/server';
import { GetUserRankingUsecase } from '@/application/usecases/user/GetUserRankingUsecase';
import { PrUserRepository } from '@/infra/repositories/prisma/PrUserRepository';

const userRepository = new PrUserRepository();
const getUserRankingUsecase = new GetUserRankingUsecase(userRepository);

export async function GET(req: NextRequest) {
  const count = 5;

  const [likeRanking, reviewRanking] = await Promise.all([
    getUserRankingUsecase.executeByLikes(count),
    getUserRankingUsecase.executeByReviews(count),
  ]);

  return NextResponse.json({ likeRanking, reviewRanking });
}
