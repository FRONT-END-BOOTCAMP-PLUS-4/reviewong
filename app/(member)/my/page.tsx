import UserReviewHeatmapContainer from './containers/UserReviewHeatmapContainer';
import UserSummaryContainer from './containers/UserSummaryContainer';
import MyActivityList from '../../components/MyActivityList';

export default function Mypage() {
  return (
    <>
      <UserSummaryContainer />
      <UserReviewHeatmapContainer />
      <MyActivityList />
    </>
  );
}
