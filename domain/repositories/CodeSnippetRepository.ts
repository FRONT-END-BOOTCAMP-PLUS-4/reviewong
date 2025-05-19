import { CodeSnippetWithRelations } from '@/infra/repositories/prisma/PrCodeSnippetRepository';
import { CodeSnippet } from '@/prisma/generated';

export type CodeSnippetCreateRequest = {
  userId: string;
  title: string;
  content: string;
  categories: number[];
};

export interface CodeSnippetRepository {
  /**
   * 코드 스니펫 생성
   * @param codeSnippet - 생성할 코드 스니펫 객체
   * @returns 생성된 코드 스니펫 ID
   */
  create(data: {
    userId: string;
    title: string;
    content: string;
    categories: number[];
  }): Promise<number>;

  /**
   * ID로 코드 스니펫 조회
   * @param id - 조회할 코드 스니펫 ID
   * @returns 코드 스니펫 객체 또는 null
   */
  findById(id: number): Promise<CodeSnippetWithRelations | null>;

  /**
   * 사용자 ID로 코드 스니펫 조회
   * @param userId - 사용자 ID
   * @returns 코드 스니펫 리스트
   */
  findByUserId(userId: string): Promise<CodeSnippet[]>;

  /**
   * 모든 코드 스니펫 조회
   * @returns 코드 스니펫 리스트
   */
  findAll(): Promise<CodeSnippet[]>;

  /**
   * 코드 스니펫 업데이트
   * @param id - 업데이트할 코드 스니펫 ID
   * @param updatedCodeSnippet - 업데이트할 데이터
   * @returns 업데이트 성공 여부
   */
  update(id: number, updatedCodeSnippet: Partial<CodeSnippet>): Promise<boolean>;

  /**
   * 코드 스니펫 삭제
   * @param id - 삭제할 코드 스니펫 ID
   * @returns 삭제 성공 여부
   */
  delete(id: number): Promise<boolean>;
}
