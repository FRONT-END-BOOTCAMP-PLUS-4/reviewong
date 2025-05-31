export interface GetUserRankingDto {
  profileImageUrl: string | null;
  nickname: string;
  gradeId: number | null;
  likeCount?: number;
  reviewCount?: number;
}
