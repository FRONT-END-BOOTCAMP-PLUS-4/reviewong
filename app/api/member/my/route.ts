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

    const repository = new PrUserRepository();
    const usecase = new GetUserUsecase(repository);

    const result = await usecase.execute(session.user.id);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 404 });
    }

    return NextResponse.json(result.data);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
