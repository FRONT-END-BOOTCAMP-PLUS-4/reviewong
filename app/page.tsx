import { Code, CodeXml, FileCode, PlusCircle } from 'lucide-react';
import DailyChallengeCard from './components/DailyChallengeCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="w-full min-h-screen items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex flex-col gap-[32px] items-stretch">
        <section className="container mx-auto text-center space-y-6 my-8 bg-white">
          <div className="flex justify-center gap-4">
            <FileCode className="h-12 w-12 text-primary" />
            <Code className="h-12 w-12 text-primary" />
            <CodeXml className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">리뷰엉이 당신의 리뷰를 기다립니다.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            코드 리뷰를 통해 코드 품질과 서비스의 품질을 높여보세요
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Link href="/codes/create">
              <Button size="lg" className="gap-2">
                <PlusCircle className="h-5 w-5" />새 코드 작성
              </Button>
            </Link>
            <Link href="/code/1">
              <Button size="lg" variant="outline">
                코드 상세 보기
              </Button>
            </Link>
          </div>
        </section>
        <div className="w-full">
          <DailyChallengeCard />
        </div>
      </main>
    </div>
  );
}
