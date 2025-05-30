import { User } from '@/prisma/generated';

export interface UserRepository {
  /**
   * 사용자 회원가입
   * @param user - 회원가입할 사용자 객체 (id 제외)
   * @returns 생성된 사용자 ID
   */
  create(user: Omit<User, 'id'>): Promise<string>;

  /**
   * 사용자 로그인
   * @param email - 사용자의 이메일
   * @param password - 사용자의 비밀번호
   * @returns 사용자 객체 또는 null
   */
  login(email: string, password: string): Promise<User | null>;

  /**
   * ID로 사용자 조회
   * @param id - 조회할 사용자 ID
   * @returns 사용자 객체 또는 null
   */
  findById(id: string): Promise<User | null>;

  /**
   * ID로 사용자 조회 & 코드 작성 수, 리뷰 수, 좋아요 수 포함
   * @param id - 조회할 사용자 ID
   * @returns 사용자 객체 또는 null
   */
  findProfileSummaryById(id: string): Promise<{
    id: string;
    email: string;
    nickname: string;
    imageUrl: string | null;
    grade?: string;
    reviewCount: number;
    likeCount: number;
    codeCount: number;
  } | null>;
  /**
   * ID로 사용자 조회 & 코드 작성 수, 리뷰 수, 좋아요 수 포함
   * @param id - 조회할 사용자 ID
   * @returns 사용자 객체 또는 null
   */

  findProfileSummaryByNickname(nickname: string): Promise<{
    id: string;
    email: string;
    nickname: string;
    imageUrl: string | null;
    grade?: string;
    reviewCount: number;
    likeCount: number;
    codeCount: number;
  } | null>;

  /**
   * 이메일로 사용자 조회
   * @param email - 조회할 사용자 이메일
   * @returns 사용자 객체 또는 null
   */
  findByEmail(email: string): Promise<User | null>;

  /**
   * 모든 사용자 조회
   * @returns 사용자 리스트
   */
  findAll(): Promise<User[]>;

  /**
   * 사용자 정보 업데이트
   * @param id - 업데이트할 사용자 ID
   * @param updatedUser - 업데이트할 데이터가 포함된 사용자 객체
   * @returns 업데이트 성공 여부
   */
  update(id: string, updatedUser: Partial<User>): Promise<boolean>;

  /**
   * 사용자 삭제
   * @param id - 삭제할 사용자 ID
   * @returns 삭제 성공 여부
   */
  delete(id: string): Promise<boolean>;

  /**
   * 사용자 ID로 프로필 이미지 URL 조회
   * @param id - 사용자 ID
   * @returns 프로필 이미지 URL 문자열 또는 null
   */
  findProfileImageUrlById(id: string): Promise<string | null>;

  /**
   * 사용자 생성 (소셜 로그인)
   * @param data - 사용자 생성 데이터
   * @returns 생성된 사용자 객체
   */
  createSocialUser(data: {
    id: string;
    email: string;
    nickname: string;
    image_url: string | null;
  }): Promise<User>;

  /**
   * 좋아요 수 기준 사용자 랭킹 조회
   * @param rankingCount - 조회할 상위 사용자 수
   * @returns 사용자 랭킹 리스트
   */
  getUserRankingByLikes(rankingCount: number): Promise<User[]>;

  /**
   * 리뷰 수 기준 사용자 랭킹 조회
   * @param rankingCount - 조회할 상위 사용자 수
   * @returns 사용자 랭킹 리스트
   */
  getUserRankingByReviews(rankingCount: number): Promise<User[]>;
}
