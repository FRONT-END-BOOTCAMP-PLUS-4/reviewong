interface UserDto {
  id: string;
  email: string;
  grade?: string;
  imageUrl: string | null;
  likeCount: number;
  codeCount: number;
  nickname: string;
  reviewCount: number;
}

export class GetUserDto {
  constructor(
    public success: boolean,
    public data?: UserDto | null,
    public error?: string | null
  ) {}
}
