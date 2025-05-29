export type ReviewWithCodeAndLikesView = {
  id: number;
  content: string;
  createdAt: Date;
  codeId: number;
  codeTitle: string;
  likeCount: number;
};
