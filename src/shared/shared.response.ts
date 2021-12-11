import { ReasonPhrases, StatusCodes } from 'http-status-codes';
export class ResponseObject<T> {
  data: T;
  message: string;
  code: number;
  constructor(initial: Partial<ResponseObject<T>>) {
    Object.assign(this, initial);
  }
}

export class StaticResponse {
  static created<T>(data: T) {
    return new ResponseObject<T>({
      code: StatusCodes.CREATED,
      message: ReasonPhrases.CREATED,
      data,
    });
  }

  static ok<T>(data: T) {
    return new ResponseObject<T>({
      code: StatusCodes.OK,
      message: ReasonPhrases.OK,
      data,
    });
  }
}
