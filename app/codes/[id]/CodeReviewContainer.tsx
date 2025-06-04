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
import { notFound } from 'next/navigation';

export default async function CodeReviewContainer({ id }: { id: string }) {
  const codeId = parseInt(id, 10);
  const session = await getServerSession(authOptions);

  let showReviewForm = false;
  let userReviewContent: string | undefined;
  let hasError = false;

  if (!session?.user?.id) {
    showReviewForm = true;
  } else {
    try {
      const authoredCheck = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/codes/${codeId}/authored_reviews`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.user.id}`,
          },
        }
      );
      const { result } = await authoredCheck.json();

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
      if (!result) {
        if (!hasUserReviewed) {
          showReviewForm = true;
        } else {
          userReviewContent = data.reviewContent;
        }
      }
    } catch (e) {
      console.error('Error fetching user review status:', e);
      hasError = true;
    }
  }

  if (hasError) {
    notFound();
  }

  return (
    <>
      <Suspense fallback={<CodeDetailSkeleton />}>
        <CodeSnippetDetailContainer
          id={id}
          userId={session?.user?.id}
          userReviewContent={userReviewContent}
        />
      </Suspense>

      <Suspense fallback={<ReviewListSkeleton />}>
        {showReviewForm ? (
          <>
            <ReviewFormContainer codeId={codeId} />
            <ReviewLock />
          </>
        ) : (
          <ReviewListContainer codeId={codeId} />
        )}
      </Suspense>
    </>
  );
}
