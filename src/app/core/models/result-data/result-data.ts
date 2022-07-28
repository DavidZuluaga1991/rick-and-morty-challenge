export interface IResult {
  codigo: string;
  descripcion: string;
}
export interface IResultData <T> {
  datos: T;
  resultado: IResult;
}

export class ResultData <T> implements IResultData<T> {
  datos: T;
  resultado: IResult;
  constructor(result: IResultData<T>) {
    this.datos = result.datos;
    this.resultado = result.resultado;
  }
}
