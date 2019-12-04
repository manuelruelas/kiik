import { IUser } from './src/models/user';
declare namespace Express {
    export interface Request {
        user: IUser;
    }
 }