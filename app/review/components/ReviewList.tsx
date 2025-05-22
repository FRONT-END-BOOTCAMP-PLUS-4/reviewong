import { ReviewView } from '@/domain/entities/ReviewView';
import ProfileImage from '@/app/components/ProfileImage';
import ReviewCommentContainer from '../containers/ReviewCommentContainer';
import { ThumbsUp, MessageSquare } from 'lucide-react';
import ReviewFormContainer from '../containers/ReviewFormContainer';
import { formatDate } from '@/utils/formatDate';

interface ReviewListProps {
  reviews: ReviewView[];
  codeId: number;
  onExpandClick?: (reviewId: number) => void;
  parentId?: number | null;
  commentButton?: boolean;
}

const ReviewList = ({
  reviews,
  codeId,
  onExpandClick,
  parentId,
  commentButton = false,
}: ReviewListProps) => {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border p-4 rounded shadow-sm flex flex-col items-start gap-2 m-8"
        >
          <div className="flex flex-row items-center gap-2 mr-2">
            {/* 프로필 이미지 */}
            <ProfileImage
              src={review.user.imageUrl || '/default-profile-image.png'}
              alt={`${review.user.nickname}의 프로필 이미지`}
              size={50}
            />
            <div className="flex flex-col">
              {/* 닉네임 + 날짜 */}
              <div className="flex flex-row text-sm text-gray-800 font-semibold">
                {review.user.nickname}
                {/* 유저 아이디 */}
                <div className="ml-2 text-xs text-gray-500">랭크{/*{review.user.email}*/}</div>
              </div>
              <div className="text-xs text-gray-500"> {formatDate(review.createdAt)}</div>
            </div>
          </div>
          {/* 본문 내용 */}
          <p className="mt-2 text-sm text-gray-700 font-bold">{review.content}</p>
          <div className="flex flex-row items-center gap-4 mt-2">
            <ThumbsUp className="m-3 w-5 text-gray-500" />
            <div className="ml-[-1rem] text-gray-500 font-bold">{review.counts.likes ?? 0}</div>
            {commentButton && (
              <MessageSquare
                onClick={() => onExpandClick?.(review.id)}
                className="w-5 text-gray-500text-gray-500"
              ></MessageSquare>
            )}
            <div className="ml-[-2px] text-gray-500 font-bold">{review.counts.replies ?? 0}</div>
          </div>
          {/* 대댓글 렌더링 위치 */}
          {parentId === review.id && (
            <div className="w-full">
              <ReviewCommentContainer codeId={codeId} parentId={review.id} />
              <ReviewFormContainer codeId={codeId} parentId={review.id} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
