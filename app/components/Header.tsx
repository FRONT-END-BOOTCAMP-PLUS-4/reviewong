'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Code } from 'lucide-react';
import ProfileImage from './ProfileImage';

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">리뷰엉</span>
        </Link>

        <nav>
          {status === 'authenticated' ? (
            <div className="flex items-center gap-4">
              <Link href="/code/create">
                <Button variant="outline" size="sm" className="gap-1">
                  <PlusCircle className="h-4 w-4" />
                  코드 작성
                </Button>
              </Link>
              <Link href="/my">
                <div className="flex items-center gap-2">
                  <ProfileImage
                    src={session.user?.image || '/default-profile-image.png'}
                    alt={session.user?.name || '사용자'}
                    size={32}
                  />
                  <span>{session.user?.name || '사용자'}</span>
                </div>
              </Link>
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
