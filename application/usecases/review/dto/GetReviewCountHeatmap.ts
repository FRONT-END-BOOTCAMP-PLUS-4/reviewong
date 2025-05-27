export class GetReviewCountHeatmap {
  constructor(
    public success: boolean,
    public data?: { date: string; count: number }[],
    public error?: string | null
  ) {}
}
