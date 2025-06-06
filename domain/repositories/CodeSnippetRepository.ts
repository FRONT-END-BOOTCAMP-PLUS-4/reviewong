import {
  CodeSnippetWithReviewCount,
  CodeSnippetWithRelations,
  CodeSnippetWithCount,
} from '@/infra/repositories/prisma/PrCodeSnippetRepository';
import { CodeSnippet } from '@/prisma/generated';
import { CodeListFilter } from '../filters/CodeListFilter';

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
   * @param userId - 사용자 ID, 요청 페이지, 페이지 사이즈
   * @returns 코드 스니펫 리스트
   */
  findAllByUserId(
    userId: string,
    page: number,
    pageSize: number
  ): Promise<[CodeSnippetWithReviewCount[], number]>;

  /**
   * 사용자 닉네임으로 코드 스니펫 조회
   * @param userId - 사용자 닉네임, 요청 페이지, 페이지 사이즈
   * @returns 코드 스니펫 리스트
   */
  findAllByUserNickname(
    nickname: string,
    page: number,
    pageSize: number
  ): Promise<[CodeSnippetWithReviewCount[], number]>;

  /**
   * 카테고리 ID로 코드 스니펫 조회
   * 모든 코드 스니펫 조회
   * @returns 코드 스니펫 리스트
   */
  findAll(filter: CodeListFilter): Promise<CodeSnippetWithCount[]>;

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

  /**
   * 일일 챌린지 코드 스니펫 ID 조회
   * @param currentUserId - 현재 사용자 ID
   * @returns 코드 스니펫 ID 또는 null
   */
  findDailyChallengeId(currentUserId?: string): Promise<number | null>;

  /**
   * 일일 챌린지 코드 스니펫 조회
   * @param currentUserId - 현재 사용자 ID
   * @returns 코드 스니펫 객체 또는 null
   */
  findDailyChallenge(currentUserId?: string): Promise<CodeSnippetWithRelations | null>;

  /**
   * 코드 스니펫의 작성자 ID 조회
   * @param codeId - 코드 스니펫 ID
   * @returns 작성자 ID 또는 null
   */
  findUserIdByCodeId(id: number): Promise<string | undefined | null>;
}
