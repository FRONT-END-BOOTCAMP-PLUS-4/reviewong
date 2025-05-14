export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly deletedAt: Date | null,
    public password: string,
    public gradeId: number,
    public imageUrl: string,
    public likeCount: number,
    public nickname: string,
    public reviewCount: number
  ) {}
}
