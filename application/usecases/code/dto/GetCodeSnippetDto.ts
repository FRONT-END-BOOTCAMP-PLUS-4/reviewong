// User 간소화된 타입 (API에 필요한 필드만)
interface UserDto {
  id: string;
  nickname: string;
  imageUrl?: string | null;
  grade?: string | null;
}

interface CategoryDto {
  id: number;
  name: string;
}

// CodeSnippet용 DTO 타입
export interface CodeSnippetDto {
  id: number;
  title: string;
  content: string;
  user: UserDto;
  categories: CategoryDto[]; // 카테고리 객체 배열로 변경
  createdAt: Date;
  updatedAt: Date;
}
export interface GetCodeSnippetDto {
  success: boolean;
  data?: CodeSnippetDto | null;
  error?: string;
}
