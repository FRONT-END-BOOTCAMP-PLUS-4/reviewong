'use client';
import { useParams } from 'next/navigation';
import UserSummaryContainer from './containers/UserSummaryContainer';
import UserReviewHeatmapContainer from './containers/UserReviewHeatmapContainer';
import ActivityList from '@/app/components/ActivityList';
import UserWrittenCodeContainer from './containers/UserWrittenCodeContainer';
import UserAnsweredReviewContainer from './containers/UserAnsweredReviewContainer';

export default function UserPage() {
  const params = useParams();
  const nickname = params.nickname as string;

  return (
    <>
      <UserSummaryContainer nickname={nickname} />
      <UserReviewHeatmapContainer nickname={nickname} />
      <ActivityList
        defaultValue="written"
        tabs={[
          {
            label: `${nickname}님이 작성한 코드`,
            value: 'written',
            content: <UserWrittenCodeContainer nickname={nickname} />,
          },
          {
            label: `${nickname}님이 답변한 리뷰`,
            value: 'answered',
            content: <UserAnsweredReviewContainer nickname={nickname} />,
          },
        ]}
      />
    </>
  );
}
