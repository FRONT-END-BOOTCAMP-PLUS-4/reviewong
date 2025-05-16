import { Review } from '@/prisma/generated';
import { CreateReviewDto } from '@/application/usecases/review/dto/ReviewDto';

export interface ReviewRepository {
  /**
   * 리뷰 생성
   * @param review - 생성할 리뷰 객체
   * @returns 생성된 리뷰 ID
   */
  create(review: CreateReviewDto): Promise<Review>;

  /**
   * 사용자 ID로 리뷰 조회
   * @param userId - 조회할 사용자 ID
   * @returns 리뷰 리스트
   */
  findByUserId(userId: string): Promise<Review[]>;

  /**
   * 리뷰 업데이트
   * @param id - 업데이트할 리뷰 ID
   * @returns 업데이트 성공 여부
   */
  update(id: number, content: Partial<Review>): Promise<boolean>;

  /**
   * 리뷰 삭제
   * @param id - 삭제할 리뷰 ID
   * @returns 삭제 성공 여부
   */
  delete(id: number): Promise<void>;
}
