export class CreateCodeSnippetDto {
  constructor(
    public userId: string,
    public title: string,
    public content: string,
    public categories: number[]
  ) {}
}
