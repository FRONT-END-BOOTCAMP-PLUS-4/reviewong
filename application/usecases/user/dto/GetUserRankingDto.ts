export interface GetUserRankingDto {
  userId: string;
  profileImageUrl: string | null;
  nickname: string;
  gradeId: number;
  likeCount?: number;
  reviewCount?: number;
}
