import { IPagination } from "../pagination/pagination.model";

export interface IResultData <T> {
  info: IPagination;
  results: T;
}

export class ResultData <T> implements IResultData<T> {
  results: T;
  info: IPagination;
  constructor(result: IResultData<T>) {
    this.info = result.info;
    this.results = result.results;
  }
}
