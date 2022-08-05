export interface IPagination {
  count: number;
  pages: number;
  next: string;
  prev: string;
  selectPage?: number;
}
