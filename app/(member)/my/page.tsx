import UserReviewHeatmapContainer from './containers/UserReviewHeatmapContainer';
import UserSummaryContainer from './containers/UserSummaryContainer';

export default function Mypage() {
  return (
    <div>
      <UserSummaryContainer />
      <UserReviewHeatmapContainer />
    </div>
  );
}
