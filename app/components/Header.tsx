import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Code, PlusCircle } from 'lucide-react';

export default function Header() {
  // 로그인 상태 - 실제 구현에서는 인증 상태를 확인합니다
  const isLoggedIn = false;
  const user = {
    name: '김개발',
    avatar: '/placeholder.svg?height=40&width=40',
  };

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">리뷰엉</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/code/create">
            <Button variant="outline" size="sm" className="gap-1">
              <PlusCircle className="h-4 w-4" />
              코드 작성
            </Button>
          </Link>

          {isLoggedIn ? (
            <Link href="/mypage">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar || '/placeholder.svg'} alt={user.name} />
                  <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <span className="hidden md:inline">{user.name}</span>
              </div>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">로그인</Button>
              </Link>
              <Link href="/signup">
                <Button>회원가입</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
