import { CodeSnippetDto } from '../../code/dto/GetCodeSnippetDto';

export class GetUserCodeSnippetsDto {
  constructor(
    public success: boolean,
    public data?: Omit<CodeSnippetDto, 'user'>[] | null,
    public error?: string | null
  ) {}
}
