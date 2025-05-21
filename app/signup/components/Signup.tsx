'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Github, Mail } from 'lucide-react';

export default function SignupForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nickname: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '회원가입 중 오류가 발생했습니다.');
      }

      router.push('/login?message=회원가입이 완료되었습니다. 로그인해주세요.');
    } catch (err) {
      setError(err instanceof Error ? err.message : '회원가입 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4">
          {error && <div className="rounded-md bg-red-50 p-4 text-sm text-red-600">{error}</div>}

          <div className="grid gap-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              className="bg-white"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="nickname">닉네임</Label>
            <Input
              id="nickname"
              name="nickname"
              type="text"
              required
              value={formData.nickname}
              onChange={handleChange}
              disabled={isLoading}
              className="bg-white"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
              className="bg-white"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? '처리 중...' : '회원가입'}
          </Button>
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
        <Button variant="outline" type="button" disabled={isLoading} className="bg-white">
          <Github className="mr-2 h-4 w-4" />
          Github
        </Button>
        <Button variant="outline" type="button" disabled={isLoading} className="bg-white">
          <Mail className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>
    </div>
  );
}
