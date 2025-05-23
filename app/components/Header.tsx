'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlusCircle } from 'lucide-react';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/">리뷰엉</Link>

        <nav>
          {status === 'authenticated' ? (
            <div className="flex items-center gap-4">
              <Link href="/code/create">
                <Button variant="outline" size="sm" className="gap-1">
                  <PlusCircle className="h-4 w-4" />
                  코드 작성
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={session.user?.image || '/placeholder.svg'} />
                  <AvatarFallback>{session.user?.name?.slice(0, 2) || '??'}</AvatarFallback>
                </Avatar>
                <span>{session.user?.name || '사용자'}</span>
              </div>
              <Button onClick={() => signOut()}>로그아웃</Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button onClick={() => signIn()}>로그인</Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
