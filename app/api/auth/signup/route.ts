import { NextResponse } from 'next/server';
import { SignUpUseCase } from '@/application/user/SignUpUsecase';
import { PrUserRepository } from '@/infra/repositories/prisma/PrUserRepository';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { email, password, nickname } = await req.json();

    // 필수 필드 검증
    if (!email || !password || !nickname) {
      return NextResponse.json(
        { error: '이메일, 비밀번호, 닉네임은 필수 입력 항목입니다.' },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: '유효한 이메일 주소를 입력해주세요.' }, { status: 400 });
    }

    // 비밀번호 길이 검증
    if (password.length < 6) {
      return NextResponse.json(
        { error: '비밀번호는 최소 6자 이상이어야 합니다.' },
        { status: 400 }
      );
    }

    const userRepository = new PrUserRepository(prisma);
    const signUpUseCase = new SignUpUseCase(userRepository);

    await signUpUseCase.execute({
      email,
      password,
      nickname,
    });

    return NextResponse.json({ message: '회원가입이 완료되었습니다.' }, { status: 201 });
  } catch (error) {
    console.error('회원가입 에러:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : '회원가입 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
