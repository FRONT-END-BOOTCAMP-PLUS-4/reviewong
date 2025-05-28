export interface UserSummary {
  id: string;
  email: string;
  nickname: string;
  grade: string;
  imageUrl: string | null;
  codeCount: number;
  reviewCount: number;
  likeCount: number;
}
