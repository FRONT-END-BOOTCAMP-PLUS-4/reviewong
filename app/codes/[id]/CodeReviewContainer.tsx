'use server';

import ReviewListContainer from '@/app/reviews/containers/ReviewListContainer';
import CodeSnippetDetailContainer from './CodeSnippetDetailContainer';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import ReviewLock from '@/app/reviews/components/ReviewLock';
import ReviewFormContainer from '@/app/reviews/containers/ReviewFormContainer';

export default async function CodeReviewContainer({ id }: { id: string }) {
  const codeId = parseInt(id, 10);
  let userReviewContent: string | undefined;
  const session = await getServerSession(authOptions);

  if (!session || !session.user.id) {
    return (
      <main>
        <CodeSnippetDetailContainer id={id} />
        <ReviewFormContainer codeId={codeId} />
        <ReviewLock />
      </main>
    );
  } else {
    const checkUserReview = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/member/codes/${codeId}/check_reviews`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user.id}`,
        },
      }
    );
    const { hasUserReviewed, data } = await checkUserReview.json();
    if (hasUserReviewed === false) {
      return (
        <main>
          <CodeSnippetDetailContainer id={id} />
          <ReviewFormContainer codeId={codeId} />
          <ReviewLock />
        </main>
      );
    } else {
      userReviewContent = data.reviewContent;
    }
  }

  return (
    <main>
      <CodeSnippetDetailContainer
        id={id}
        userId={session.user.id}
        userReviewContent={userReviewContent}
      />
      <ReviewListContainer codeId={codeId} />
    </main>
  );
}
