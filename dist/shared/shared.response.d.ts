export declare class ResponseObject<T> {
    data: T;
    message: string;
    code: number;
    constructor(initial: Partial<ResponseObject<T>>);
}
export declare class StaticResponse {
    static created<T>(data: T): ResponseObject<T>;
    static ok<T>(data: T): ResponseObject<T>;
}
