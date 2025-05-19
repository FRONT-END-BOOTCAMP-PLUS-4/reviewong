// User 간소화된 타입 (API에 필요한 필드만)
interface UserDto {
  id: string;
  nickname: string;
  imageUrl?: string | null;
}

// CodeSnippet용 DTO 타입
export interface CodeSnippetDto {
  id: number;
  title: string;
  content: string;
  user: UserDto;
  categories: string[]; // 카테고리 이름 배열
  createdAt: Date;
  updatedAt: Date;
}

export interface GetCodeSnippetDto {
  success: boolean;
  data?: CodeSnippetDto;
  error?: string;
}
