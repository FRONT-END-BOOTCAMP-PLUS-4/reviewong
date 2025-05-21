import LoginForm from './components/LoginForm';

export default function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 py-8 bg-white">
      <div className="flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">로그인</h1>
          <p className="text-sm text-muted-foreground">이메일과 비밀번호를 입력하여 로그인하세요</p>
          <LoginForm />
          <p className="px-8 text-sm text-muted-foreground">
            아직 계정이 없으신가요?{' '}
            <a href="/signup" className="underline underline-offset-4 hover:text-primary">
              회원가입
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
