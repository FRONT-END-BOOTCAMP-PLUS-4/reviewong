import UserReviewHeatmapContainer from './containers/UserReviewHeatmapContainer';
import UserSummaryContainer from './containers/UserSummaryContainer';
import ActivityList from '../../components/ActivityList';
import MyWrittenCodeContainer from './containers/MyWrittenCodeContainer';
import MyAnsweredReviewContainer from './containers/MyAnsweredReviewContainer';

export default function Mypage() {
  return (
    <>
      <UserSummaryContainer />
      <UserReviewHeatmapContainer />
      <ActivityList
        defaultValue="written"
        tabs={[
          { label: '내가 작성한 코드', value: 'written', content: <MyWrittenCodeContainer /> },
          { label: '내가 답변한 리뷰', value: 'answered', content: <MyAnsweredReviewContainer /> },
        ]}
      />
    </>
  );
}
