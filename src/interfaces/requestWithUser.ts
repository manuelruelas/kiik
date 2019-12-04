import User,{ IUser } from '../models/user';
import { Request } from 'express';


interface RequestWithUser extends Request{
    user:IUser;
}

export default RequestWithUser;