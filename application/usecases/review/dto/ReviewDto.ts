export class CreateReviewDto {
  constructor(
    public codeId: number,
    public userId: string,
    public content: string,
    public parentId?: number | null
  ) {}
}

export class updateReviewDto {
  constructor(
    public reviewId: number,
    public content: string,
    public parentId?: number
  ) {}
}
