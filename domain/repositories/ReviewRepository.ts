import {
  ReplyWithRelations,
  ReviewWithRelations,
} from '@/infra/repositories/prisma/PrReviewRepository';

export interface ReviewRepository {
  /**
   * 코드 스니펫에 대한 리뷰 목록 조회
   * @param codeId - 코드 스니펫 ID
   * @returns 리뷰 목록
   */

  findAllByCodeId(codeId: number): Promise<ReviewWithRelations[]>;
  findAllByParentId(codeId: number): Promise<ReplyWithRelations[]>;
}
