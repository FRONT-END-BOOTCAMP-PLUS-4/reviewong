import MyReviewHeatmapContainer from './containers/MyReviewHeatmapContainer';
import ActivityList from '../../components/ActivityList';
import MyWrittenCodeContainer from './containers/MyWrittenCodeContainer';
import MyAnsweredReviewContainer from './containers/MyAnsweredReviewContainer';
import MySummaryContainer from './containers/MySummaryContainer';

export default function Mypage() {
  return (
    <>
      <MySummaryContainer />
      <MyReviewHeatmapContainer />
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
