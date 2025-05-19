'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Github, Mail } from 'lucide-react';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      console.log('로그인 시도:', { email });

      const result = await signIn('credentials', {
        redirect: true,
        callbackUrl: '/',
        email,
        password,
      });

      console.log('로그인 결과:', JSON.stringify(result, null, 2));

      if (result?.error) {
        setError(`로그인 에러: ${result.error}`);
      } else if (result?.ok) {
        router.push('/');
      } else {
        setError('알 수 없는 오류가 발생했습니다.');
      }
    } catch (err) {
      console.error('로그인 중 에러 발생:', err);
      setError('로그인 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid gap-6">
      <form onSubmit={handleLogin}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="user@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="bg-white"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">비밀번호</Label>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary">
                비밀번호 찾기
              </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              className="bg-white"
            />
          </div>
          <Button type="submit" disabled={isLoading} className="font-bold">
            {isLoading ? '로그인 중...' : '로그인'}
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-muted-foreground">또는 다음으로 계속</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          className="bg-white"
          onClick={() => {
            console.log('깃헙 로그인 시도');
            signIn('github', {
              callbackUrl: '/',
              redirect: true,
            })
              .then((result) => {
                console.log('깃헙 로그인 결과:', result);
              })
              .catch((error) => {
                console.error('깃헙 로그인 에러:', error);
              });
          }}
        >
          <Github className="mr-2 h-4 w-4" />
          Github
        </Button>
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          className="bg-white"
          onClick={() =>
            signIn('google', {
              callbackUrl: '/',
              redirect: true,
            })
          }
        >
          <Mail className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>
    </div>
  );
}
