import Link from 'next/link';
import SignupContainer from './containers/SignupContainer';

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">회원가입</h2>
          <p className="mt-2 text-sm text-gray-600">
            이미 계정이 있으신가요?{' '}
            <Link href="/login" className="underline underline-offset-4 hover:text-primary">
              로그인
            </Link>
          </p>
        </div>
        <SignupContainer />
      </div>
    </div>
  );
}
