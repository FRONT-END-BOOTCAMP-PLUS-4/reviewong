export interface GetDailyChallengeDto {
  success: boolean;
  data?: {
    id: number;
    title: string;
    content: string;
    user: {
      id: string;
      nickname: string;
      imageUrl: string | null;
      grade: string;
    };
    categories: {
      id: number;
      name: string;
    }[];
    createdAt: Date;
    updatedAt: Date;
  };
  error?: string;
}
