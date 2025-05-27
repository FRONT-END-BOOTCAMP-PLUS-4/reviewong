import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { LoginCredentials, LoginResult, SocialLoginOptions } from '@/types/auth';

export const useLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const login = async (credentials: LoginCredentials): Promise<LoginResult> => {
    setIsLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: credentials.email,
        password: credentials.password,
      });

      if (result?.error) {
        setError(`로그인 에러: ${result.error}`);
        return { error: result.error };
      } else if (result?.ok) {
        router.push('/');
        return { ok: true };
      } else {
        setError('알 수 없는 오류가 발생했습니다.');
        return { error: '알 수 없는 오류가 발생했습니다.' };
      }
    } catch (err) {
      console.error('로그인 중 에러 발생:', err);
      setError('로그인 중 오류가 발생했습니다.');
      return { error: '로그인 중 오류가 발생했습니다.' };
    } finally {
      setIsLoading(false);
    }
  };

  const socialLogin = async (options: SocialLoginOptions): Promise<void> => {
    setIsLoading(true);
    setError('');

    try {
      await signIn(options.provider, {
        callbackUrl: options.callbackUrl || '/',
        redirect: true,
      });
    } catch (err) {
      console.error(`${options.provider} 로그인 중 에러 발생:`, err);
      setError(`${options.provider} 로그인 중 오류가 발생했습니다.`);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    socialLogin,
    isLoading,
    error,
  };
};
