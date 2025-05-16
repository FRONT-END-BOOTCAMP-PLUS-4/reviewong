import Signup from './components/Signup';

export default function SignupPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 py-8 bg-white">
      <div className="flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">회원가입</h1>
          <p className="text-sm text-muted-foreground">아래 정보를 입력하여 계정을 생성하세요</p>
          <Signup />
          <p className="px-8 text-sm text-muted-foreground">
            이미 계정이 있으신가요?{' '}
            <a href="/login" className="underline underline-offset-4 hover:text-primary">
              로그인
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
