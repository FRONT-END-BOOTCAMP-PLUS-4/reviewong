import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, ThumbsUp } from 'lucide-react';
import ProfileImage from './ProfileImage';

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
}

export default function RankingList({ title, ranking, type, className = '' }: RankingListProps) {
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
                <div className="font-medium">{user.nickname}</div>
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
