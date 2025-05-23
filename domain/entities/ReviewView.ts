export interface ReviewView {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  user: {
    id: string;
    nickname: string;
    imageUrl: string | null;
    grade: string | null;
  };
  counts: {
    replies?: number;
    likes: number;
  };
}
