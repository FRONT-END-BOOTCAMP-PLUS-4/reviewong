import { NextResponse } from 'next/server';
import { PrUserRepository } from '@/infra/repositories/prisma/PrUserRepository';
import { GetUserSummaryUsecase } from '@/application/usecases/user/GetUserSummaryUsecase';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });
    }

    // 유저 정보 가져오기
    const userRepository = new PrUserRepository();
    const getUserSummaryUsecase = new GetUserSummaryUsecase(userRepository);
    const result = await getUserSummaryUsecase.execute(session.user.id);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 404 });
    }

    return NextResponse.json({
      user: result.data,
    });
  } catch (error) {
    console.error('Error fetching user profile', error);
    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
