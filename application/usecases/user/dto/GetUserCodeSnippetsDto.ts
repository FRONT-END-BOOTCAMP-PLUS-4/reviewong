import { CodeSnippetDto } from '../../code/dto/GetCodeSnippetDto';

export class GetUserCodeSnippetsDto {
  constructor(
    public success: boolean,
    public data?: {
      codeSnippets: (Omit<CodeSnippetDto, 'user' | 'updatedAt'> & { reviewCount: number })[];
      totalCount: number;
      page: number;
      pageSize: number;
    } | null,
    public error?: string | null
  ) {}
}
