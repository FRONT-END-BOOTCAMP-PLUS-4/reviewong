export class CreateReviewDto {
  constructor(
    public codeId: number,
    public userId: string,
    public content: string,
    public parentId?: number | null
  ) {}
}
