export interface GetUserRankingDto {
  userId: string;
  profileImageUrl: string | null;
  nickname: string;
  gradeId: number | null;
  likeCount?: number;
  reviewCount?: number;
}
