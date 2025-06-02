import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ThumbsUp, MessageSquare } from 'lucide-react';
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
    <Card className={`h-full bg-white ${className}`}>
      <CardHeader>
        <CardTitle className="text-center text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {ranking.map((user, index) => (
            <div key={user.nickname} className="flex items-center gap-3">
              <div className="font-bold text-muted-foreground w-6">{index + 1}</div>
              <ProfileImage
                src={user.profileImageUrl || '/default-profile-image.png'}
                alt={user.nickname}
                size={32}
              />
              <div className="flex-1">
                <div className="font-medium flex items-center gap-2">
                  {user.nickname}
                  {user.gradeId && <GradeBadge grade={GRADE_ID_MAP[user.gradeId]} size={20} />}
                </div>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                {type === 'like' ? (
                  <>
                    <ThumbsUp className="h-4 w-4" />
                    <span>{user.likeCount}</span>
                  </>
                ) : (
                  <>
                    <MessageSquare className="h-4 w-4" />
                    <span>{user.reviewCount}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
