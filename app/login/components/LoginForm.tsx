'use client';

import type React from 'react';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Github, Mail } from 'lucide-react';
import Link from 'next/link';
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

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError('로그인 에러 : 아이디 또는 비밀번호가 잘못되었습니다.');
    } else {
      router.push('/');
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
        <Button asChild variant="outline" type="button" disabled={isLoading} className="bg-white">
          <Link href="/api/auth/github">
            <Github className="mr-2 h-4 w-4" />
            Github
          </Link>
        </Button>
        <Button asChild variant="outline" type="button" disabled={isLoading} className="bg-white">
          <Link href="/api/auth/google">
            <Mail className="mr-2 h-4 w-4" />
            Google
          </Link>
        </Button>
      </div>
    </div>
  );
}
