import { Strategy } from 'passport-jwt';
import { HashedPayload } from '../dto/hashed.dto';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: {
        payload: HashedPayload;
        iat: Date;
        exp: Date;
    }): Promise<{
        user: HashedPayload;
    }>;
}
export {};
