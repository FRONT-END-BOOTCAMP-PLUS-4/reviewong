import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
// import { Separator } from '@/components/ui/separator';
// import { Github, Mail } from 'lucide-react';

interface SignupFormProps {
  formData: {
    email: string;
    password: string;
    nickname: string;
  };
  isLoading: boolean;
  error: string;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SignupForm({
  formData,
  isLoading,
  error,
  onSubmit,
  onChange,
}: SignupFormProps) {
  return (
    <div className="grid gap-6 mb-4">
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
            <Label htmlFor="nickname">닉네임</Label>
            <Input
              id="nickname"
              name="nickname"
              type="text"
              placeholder="닉네임을 입력하세요"
              value={formData.nickname}
              onChange={onChange}
              required
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
              placeholder="••••••••"
              value={formData.password}
              onChange={onChange}
              required
              disabled={isLoading}
              className="bg-white"
            />
          </div>
          <Button type="submit" disabled={isLoading} className="font-bold">
            {isLoading ? '처리 중...' : '회원가입'}
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </form>
      {/* <div className="relative">
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
      </div> */}
    </div>
  );
}
