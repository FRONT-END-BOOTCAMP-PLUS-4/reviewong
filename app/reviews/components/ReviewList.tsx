import { ReviewView } from '@/domain/entities/ReviewView';
import ProfileImage from '@/app/components/ProfileImage';
import ReviewCommentContainer from '../containers/ReviewCommentContainer';
import { ThumbsUp, MessageSquare } from 'lucide-react';
import ReviewFormContainer from '../containers/ReviewFormContainer';
import { formatDate } from '@/utils/formatDate';
import GradeBadge from '@/app/components/GradeBadge';
import MDEditor from '@uiw/react-md-editor';

interface ReviewListProps {
  reviews: ReviewView[];
  codeId: number;
  onClickLike?: (reviewId: number, isLiked: boolean, authorId: string) => void; // 좋아요 클릭 핸들러
  onExpandClick?: (reviewId: number) => void;
  onEditClick?: (reviewId: number) => void;
  editingReviewId?: number | null; // 수정 중인 리뷰 ID
  onDeleteClick?: (reviewId: number) => void;
  onReload?: () => void;
  parentId?: number | null;
  commentButton?: boolean;
  isAuthor: string | null; // 로그인한 유저의 ID
  showInteractions?: boolean;
}

const ReviewList = ({
  reviews,
  codeId,
  onClickLike,
  onExpandClick,
  onEditClick,
  editingReviewId,
  onDeleteClick,
  onReload,
  parentId,
  commentButton = false,
  isAuthor,
  showInteractions = true,
}: ReviewListProps) => {
  return (
    <div className="space-y-4">
      {showInteractions || reviews.length !== 0 ? (
        <h3 className="font-bold m-5">리뷰 목록 ({reviews.length})</h3>
      ) : (
        <h3 className="font-bold m-5">현재 리뷰가 없습니다. 첫 리뷰어가 되어 보세요!</h3>
      )}

      {reviews.map((review) => (
        <div
          key={review.id}
          className="border p-4 rounded-xl shadow-sm flex flex-col items-start gap-2"
        >
          <div className="flex flex-row items-center gap-2 mr-2 w-full">
            {/* 프로필 이미지 */}
            <ProfileImage
              src={review.user.imageUrl || '/default-profile-image.png'}
              alt={`${review.user.nickname}의 프로필 이미지`}
              nickname={review.user.nickname}
              size={50}
            />
            <div className="flex flex-col w-full">
              {/* 닉네임 + 날짜 */}
              <div className="flex items-center text-sm text-gray-800 font-semibold justify-between">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="truncate max-w-[120px]">{review.user.nickname}</div>
                  <GradeBadge grade={review.user.grade || undefined} />
                </div>
                {/* 수정/삭제 버튼 */}
                {isAuthor === review.user.id && (
                  <div className="flex gap-2">
                    <div
                      className="text-blue-600 hover:underline cursor-pointer"
                      onClick={() => onEditClick?.(review.id)}
                    >
                      수정
                    </div>
                    <div
                      className="text-red-600 hover:underline cursor-pointer"
                      onClick={() => onDeleteClick?.(review.id)}
                    >
                      삭제
                    </div>
                  </div>
                )}
              </div>

              <div className="text-xs text-gray-500"> {formatDate(review.createdAt)}</div>
            </div>
          </div>
          {/* 본문 내용 */}
          {editingReviewId === review.id ? (
            <ReviewFormContainer
              codeId={codeId}
              editingReview={{ id: review.id, content: review.content }}
              onDone={() => {
                onEditClick?.(0);
                onReload?.();
              }} // 수정 완료 후 상태 초기화용
            />
          ) : (
            <MDEditor.Markdown source={review.content} style={{ whiteSpace: 'pre-wrap' }} />
          )}
          {showInteractions && (
            <div className="flex flex-row items-center gap-4 mt-2 cursor-pointer ">
              <ThumbsUp
                onClick={() => onClickLike?.(review.id, Boolean(review.isLiked), review.user.id)} //undifined일 경우 false로 처리
                className={`m-3 w-5 ${review.isLiked ? 'text-yellow-400' : 'text-gray-500'}`}
              />
              <div className="ml-[-1rem] text-gray-500 font-bold">{review.counts.likes ?? 0}</div>
              {commentButton && (
                <div className="flex flex-row cursor-pointer items-center gap-3">
                  <MessageSquare
                    onClick={() => onExpandClick?.(review.id)}
                    className="w-5 text-gray-500"
                  />
                  <div className="ml-[-2px] text-gray-500 font-bold">
                    {review.counts.replies ?? 0}
                  </div>
                </div>
              )}
            </div>
          )}

          {parentId === review.id && showInteractions && (
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
