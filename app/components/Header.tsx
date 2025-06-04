'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
// import { PlusCircle } from 'lucide-react';
import { useSession, signIn } from 'next-auth/react';
// import { signOut } from 'next-auth/react';
import { Code, CodeXml } from 'lucide-react';
import ProfileImage from './ProfileImage';
import CreateCodeButton from './CreateCodeButton';

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
              <Link href="/codes/create">
                <CreateCodeButton variant="outline" size="sm" />
              </Link>

              <Link href="/codes">
                <Button size="sm" className="text-black gap-1 cursor-pointer font-bold">
                  <CodeXml className="h-4 w-4" />
                  코드 리스트 보기
                </Button>
              </Link>

              <Link href="/my" className="flex items-center gap-2 cursor-pointer">
                <ProfileImage
                  src={session.user?.image || '/default-profile-image.png'}
                  alt={session.user?.name || '사용자'}
                  redirectUserPage={false}
                  size={32}
                />
                <span>{session.user?.name || '사용자'}</span>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button onClick={() => signIn()} className="cursor-pointer">
                로그인
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
