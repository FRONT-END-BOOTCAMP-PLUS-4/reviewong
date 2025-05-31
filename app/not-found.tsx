// app/404.tsx
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Image
        src="/reviewong-404.png"
        alt="404 부엉이"
        width={500}
        height={500}
        style={{ marginBottom: 32 }}
        priority
      />
      <h1 className="text-4xl font-bold">404 - 페이지를 찾을 수 없습니다</h1>
      <p className="text-xl text-muted-foreground">요청하신 페이지가 존재하지 않아요!</p>
      <Link href="/">
        <Button variant="outline" className="mt-4 hover:bg-primary hover:text-white">
          홈으로 돌아가기
        </Button>
      </Link>
    </div>
  );
}
