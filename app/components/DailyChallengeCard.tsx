import CodeSnippetDetail from '../codes/[id]/CodeSnippetDetail';
import ReviewListContainer from '../reviews/containers/ReviewListContainer';
import { formatDate } from '@/utils/formatDate';
import { fetchDailyChallenge } from '../api/codes/daily/actions';

export default async function DailyChallengeCard() {
  try {
    const data = await fetchDailyChallenge();

    if (!data) {
      return <div>로그인이 필요합니다.</div>;
    }

    const categories = Array.isArray(data.codeSnippet.categories)
      ? data.codeSnippet.categories.map((c: { category: string }) => c.category)
      : [];

    return (
      <div className="border border-gray-200 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 border-b pb-4">오늘의 코드 리뷰</h2>
        {data.codeSnippet ? (
          <>
            <CodeSnippetDetail
              id={data.codeSnippet.id}
              title={data.codeSnippet.title}
              content={data.codeSnippet.content}
              author={data.codeSnippet.user.nickname}
              profileImage={data.codeSnippet.user.imageUrl}
              categories={categories}
              isAuthor={false}
              date={formatDate(data.codeSnippet.createdAt)}
            />
            <ReviewListContainer codeId={data.codeSnippet.id} />
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
