'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Github, Mail } from 'lucide-react';
import { SocialLoginOptions } from '@/types/auth';

interface LoginFormProps {
  formData: {
    email: string;
    password: string;
  };
  isLoading: boolean;
  error: string;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSocialLogin: (options: SocialLoginOptions) => Promise<void>;
}

export default function LoginForm({
  formData,
  isLoading,
  error,
  onSubmit,
  onChange,
  onSocialLogin,
}: LoginFormProps) {
  return (
    <div className="grid gap-6">
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="user@email.com"
              value={formData.email}
              onChange={onChange}
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
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={onChange}
              required
              disabled={isLoading}
              className="bg-white"
            />
          </div>
          <Button type="submit" disabled={isLoading} className="font-bold">
            {isLoading ? '로그인 중...' : '로그인'}
          </Button>
          {error && <p className="text-red-500 text-[12px] px-1">{error}</p>}
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
          onClick={() => onSocialLogin({ provider: 'github' })}
        >
          <Github className="mr-2 h-4 w-4" />
          Github
        </Button>
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          className="bg-white"
          onClick={() => onSocialLogin({ provider: 'google' })}
        >
          <Mail className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>
    </div>
  );
}
