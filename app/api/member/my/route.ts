import { NextRequest, NextResponse } from 'next/server';
import { PrUserRepository } from '@/infra/repositories/prisma/PrUserRepository';
import { GetUserUsecase } from '@/application/usecases/user/GetUserUsecase';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: '로그인이 필요합니다.' }, { status: 401 });
    }

    // 유저 정보 가져오기
    const userRepository = new PrUserRepository();
    const getUserUsecase = new GetUserUsecase(userRepository);
    const result = await getUserUsecase.execute(session.user.id);

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
