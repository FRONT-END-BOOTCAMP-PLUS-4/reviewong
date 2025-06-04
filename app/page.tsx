import { Code, CodeXml, FileCode } from 'lucide-react';
import DailyChallengeCard from './components/DailyChallengeCard';
import Link from 'next/link';
import CreateCodeButton from './components/CreateCodeButton';
import RankingListContainer from './containers/RankingListContainer';
import AnimatedHeadline from './components/AnimatedHeadline';

export default function Home() {
  return (
    <div className="w-full min-h-screen items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex flex-col gap-[32px] items-stretch">
        <section className="container mx-auto text-center space-y-8 py-28 bg-white">
          <div className="flex justify-center gap-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <FileCode className="h-10 w-10 text-primary" />
            </div>
            <div className="bg-primary/10 p-4 rounded-full">
              <Code className="h-10 w-10 text-primary" />
            </div>
            <div className="bg-primary/10 p-4 rounded-full">
              <CodeXml className="h-10 w-10 text-primary" />
            </div>
          </div>

          <AnimatedHeadline />

          <div className="flex justify-center mt-4">
            <Link href="/codes/create">
              <CreateCodeButton variant="default" size="lg" />
            </Link>
          </div>
        </section>

        <div className="w-full">
          <DailyChallengeCard />
        </div>
        <RankingListContainer />
      </main>
    </div>
  );
}
