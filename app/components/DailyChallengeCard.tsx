import CodeSnippetDetail from '../codes/[id]/CodeSnippetDetail';
import { formatDate } from '@/utils/formatDate';
import { fetchDailyChallenge } from '../containers/actions';
import LatestReviewListContainer from '../reviews/containers/LatestReviewContainer';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function DailyChallengeCard() {
  try {
    const data = await fetchDailyChallenge();

    if (!data) {
      return <div>데일리 챌린지를 불러오는데 실패했습니다.</div>;
    }

    return (
      <div className="border border-gray-200 rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 border-b pb-4">오늘의 코드 리뷰</h2>
        {data.codeSnippet ? (
          <>
            {data.isCompleted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <CheckCircle2 className="h-16 w-16 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">오늘의 챌린지를 완료하셨습니다!</h3>
                <p className="text-gray-600">내일 새로운 챌린지가 기다리고 있어요.</p>
                <div className="flex flex-col justify-center gap-4 mt-6">
                  <p>다른 사람의 의견도 궁금하신가요?</p>
                  <Button variant="outline">
                    <Link href={`/codes/${data.codeSnippet.id}`}>코드 상세 보기</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <CodeSnippetDetail
                  id={data.codeSnippet.id}
                  title={data.codeSnippet.title}
                  content={data.codeSnippet.content}
                  author={data.codeSnippet.user.nickname}
                  profileImage={data.codeSnippet.user.imageUrl}
                  categories={data.codeSnippet.categories}
                  isAuthor={false}
                  date={formatDate(data.codeSnippet.createdAt)}
                />
                {data.session ? (
                  <LatestReviewListContainer codeId={data.codeSnippet.id} />
                ) : (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center">
                    <p className="text-gray-600">리뷰를 작성하려면 로그인이 필요합니다.</p>
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <p className="text-gray-500">오늘의 코드 리뷰를 불러오는 중입니다...</p>
        )}
      </div>
    );
  } catch (error) {
    console.error('Component Error:', error);
    return <div>데일리 챌린지를 불러오는데 실패했습니다.</div>;
  }
}
