import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ThumbsUp, MessageSquare, Crown, Sparkles } from 'lucide-react';
import ProfileImage from './ProfileImage';
import GradeBadge from './GradeBadge';
import RankingListSkeleton from './RankingListSkeleton';

const GRADE_ID_MAP: Record<number, string> = {
  1: '브론즈',
  2: '실버',
  3: '골드',
  4: '플래티넘',
  5: '다이아몬드',
};

interface RankingUser {
  nickname: string;
  profileImageUrl: string | null;
  gradeId: number | null;
  likeCount?: number;
  reviewCount?: number;
}

interface RankingListProps {
  title: string;
  ranking: RankingUser[];
  type: 'like' | 'review';
  className?: string;
  isLoading?: boolean;
}

const getRankBadgeColor = (index: number) => {
  if (index === 0) {
    return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg';
  }
  if (index === 1) {
    return 'bg-gradient-to-r from-gray-300 to-gray-500 text-white shadow-md';
  }
  if (index === 2) {
    return 'bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-md';
  }
  return 'bg-gray-200 text-gray-700';
};

const getCardBgColor = (index: number) => {
  if (index === 0) {
    return 'bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50 border-yellow-300 shadow-lg relative overflow-hidden';
  }
  if (index === 1) {
    return 'bg-gradient-to-r from-gray-50 to-slate-50 border-gray-300 shadow-md';
  }
  if (index === 2) {
    return 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-300 shadow-md';
  }
  return 'bg-white hover:bg-gray-50 border-gray-200 hover:shadow-md transition-all duration-200';
};

export default function RankingList({
  title,
  ranking,
  type,
  className = '',
  isLoading = false,
}: RankingListProps) {
  if (isLoading) {
    return <RankingListSkeleton title={title} className={className} />;
  }

  return (
    <Card
      className={`h-full shadow-lg border-0 bg-gradient-to-b from-white gap-0 to-gray-50 ${className}`}
    >
      <CardHeader className="pb-4 bg-gradient-to-r rounded-t-lg">
        <CardTitle className="text-center text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {ranking.map((user, index) => (
            <div
              key={user.nickname}
              className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] ${getCardBgColor(index)} ${
                index === 0 ? 'animate-pulse' : ''
              }`}
            >
              {/* 1등 반짝이는 효과 */}
              {index === 0 && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  <Sparkles className="absolute top-2 right-2 w-4 h-4 text-yellow-400 animate-bounce" />
                  <Sparkles className="absolute bottom-2 left-2 w-3 h-3 text-yellow-300 animate-pulse" />
                </>
              )}

              {/* 순위 번호 */}
              <div className="flex items-center gap-2 relative z-10">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 ${getRankBadgeColor(index)} ${
                    index === 0 ? 'animate-pulse scale-110' : ''
                  }`}
                >
                  {index + 1}
                </div>
                {index === 0 && <Crown className="w-5 h-5 text-yellow-500 drop-shadow-sm" />}
              </div>

              {/* 프로필 이미지 */}
              <div
                className={`relative ${index === 0 ? 'ring-2 ring-yellow-300 ring-offset-2 rounded-full' : ''}`}
              >
                <ProfileImage
                  src={user.profileImageUrl || '/default-profile-image.png'}
                  alt={user.nickname}
                  nickname={user.nickname}
                  size={index === 0 ? 44 : 40}
                />
                {index === 0 && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                )}
              </div>

              {/* 사용자 정보 */}
              <div className="flex-1 min-w-0 relative z-10">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-semibold truncate ${
                      index === 0
                        ? 'text-lg bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent'
                        : index === 1
                          ? 'text-gray-700'
                          : index === 2
                            ? 'text-amber-700'
                            : 'text-gray-600'
                    }`}
                  >
                    {user.nickname}
                  </span>
                  {user.gradeId && <GradeBadge grade={GRADE_ID_MAP[user.gradeId]} size={30} />}
                </div>
              </div>

              {/* 점수 */}
              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-full relative z-10 ${
                  index === 0
                    ? 'bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 font-bold text-lg'
                    : index === 1
                      ? 'bg-gray-100 text-gray-600 font-semibold'
                      : index === 2
                        ? 'bg-amber-100 text-amber-600 font-semibold'
                        : 'text-gray-500'
                }`}
              >
                {type === 'like' ? (
                  <>
                    <ThumbsUp className={`${index === 0 ? 'w-5 h-5' : 'w-4 h-4'}`} />
                    <span className="font-semibold">{user.likeCount || 0}</span>
                  </>
                ) : (
                  <>
                    <MessageSquare className={`${index === 0 ? 'w-5 h-5' : 'w-4 h-4'}`} />
                    <span className="font-semibold">{user.reviewCount || 0}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {ranking.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <div className="mb-4 p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              {type === 'like' ? (
                <ThumbsUp className="w-8 h-8 text-gray-300" />
              ) : (
                <MessageSquare className="w-8 h-8 text-gray-300" />
              )}
            </div>
            <p className="text-lg font-medium">아직 랭킹 데이터가 없습니다</p>
            <p className="text-sm text-gray-400 mt-1">첫 번째 랭커가 되어보세요!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
