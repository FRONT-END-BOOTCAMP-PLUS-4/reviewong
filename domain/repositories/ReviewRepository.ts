import { Review } from '@/prisma/generated';
import { CreateReviewDto } from '@/application/usecases/review/dto/CreateReviewDto';
import { ReviewView } from '../entities/ReviewView';

export interface ReviewRepository {
  /**
   * 리뷰 생성
   * @param review - 생성할 리뷰 객체
   * @returns 생성된 리뷰 ID
   */
  create(review: CreateReviewDto): Promise<Review>;

  /**
   * 리뷰 ID로 리뷰 조회
   * @param id - 조회할 리뷰 ID
   * @returns 리뷰 객체
   */
  findById(id: number): Promise<Review | null>;

  /**
   * 사용자 ID와 codeId로 리뷰 조회
   * @param userId - 조회할 사용자 ID
   * @param codeId - 조회할 코드 스니펫 ID
   * @returns 리뷰 리스트
   */
  findUserFirst(userId: string, codeId: number): Promise<Review | null>;

  /**
   * 리뷰 업데이트
   * @param id - 업데이트할 리뷰 ID
   * @returns 업데이트 성공 여부
   */
  update(id: number, content: Partial<Review>): Promise<boolean>;

  /**
   * 리뷰 삭제
   * @param id - 삭제할 리뷰 ID
   * @param userId - 삭제를 요청한 사용자 ID
   * @returns 삭제 성공 여부
   */
  delete(id: number, userId: string): Promise<void>;

  /**
   * 코드 스니펫에 대한 리뷰 목록 조회
   * @param codeId - 코드 스니펫 ID
   * @returns 리뷰 목록
   */
  findAllByCodeId(codeId: number): Promise<ReviewView[]>;

  /**
   * 코드 스니펫에 대한 답글 목록 조회
   * @param codeId - 코드 스니펫 ID
   * @returns 답글 목록
   */
  findAllByParentId(codeId: number): Promise<ReviewView[]>;

  /**
   * 데일리 챌린지 코드에 대한 최신 2개 리뷰 조회
   * @param codeId - 코드 작성자 ID
   * @returns 최신 리뷰 2개
   */
  findLatestTwoByCodeId(codeId: number): Promise<ReviewView[]>;

  /**
   * 유저가 작성한 리뷰 개수를 날짜별로 집계
   * @param userId - 유저 ID
   * @returns 날짜별 리뷰 개수 리스트
   */
  countGroupedByDate(userId: string): Promise<{ date: string; count: number }[]>;
}
