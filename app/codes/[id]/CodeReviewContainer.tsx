'use server';

import { Suspense } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import ReviewListContainer from '@/app/reviews/containers/ReviewListContainer';
import ReviewLock from '@/app/reviews/components/ReviewLock';
import ReviewFormContainer from '@/app/reviews/containers/ReviewFormContainer';
import CodeSnippetDetailContainer from '@/app/codes/[id]/CodeSnippetDetailContainer';
import CodeDetailSkeleton from '@/app/components/skeletons/CodeDetailSkeleton';
import ReviewListSkeleton from '@/app/components/skeletons/ReviewListSkeleton';

export default async function CodeReviewContainer({ id }: { id: string }) {
  const codeId = parseInt(id, 10);
  let userReviewContent: string | undefined;
  const session = await getServerSession(authOptions);

  if (!session || !session.user.id) {
    return (
      <>
        <CodeSnippetDetailContainer id={id} />
        <ReviewFormContainer codeId={codeId} />
        <ReviewLock />
      </>
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
        <>
          <CodeSnippetDetailContainer id={id} />
          <ReviewFormContainer codeId={codeId} />
          <ReviewLock />
        </>
      );
    } else {
      userReviewContent = data.reviewContent;
    }
  }

  return (
    <>
      <Suspense fallback={<CodeDetailSkeleton />}>
        <CodeSnippetDetailContainer
          id={id}
          userId={session.user.id}
          userReviewContent={userReviewContent}
        />
      </Suspense>
      <Suspense fallback={<ReviewListSkeleton />}>
        <ReviewListContainer codeId={codeId} />
      </Suspense>
    </>
  );
}
