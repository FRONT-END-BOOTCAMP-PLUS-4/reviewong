import { NextRequest, NextResponse } from 'next/server';
import { PrUserRepository } from '@/infra/repositories/prisma/PrUserRepository';
import { GetUserSummaryUsecase } from '@/application/usecases/user/anon/GetUserSummaryUsecase';

export async function GET(req: NextRequest, { params }: { params: Promise<{ nickname: string }> }) {
  try {
    const { nickname } = await params;

    if (!nickname) {
      return NextResponse.json({ error: '존재하지 않는 사용자입니다.' }, { status: 401 });
    }

    const userRepository = new PrUserRepository();
    const getUserSummaryUsecase = new GetUserSummaryUsecase(userRepository);
    const result = await getUserSummaryUsecase.execute(nickname);

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
