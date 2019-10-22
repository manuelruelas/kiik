import jwt = require('jsonwebtoken');
import { NextFunction, Response, Request } from 'express';
import config from '../config/config';
import RequestWithUser from '../interfaces/requestWithUser';
import { IUser } from '../models/user';

let verificationToken = (req: RequestWithUser, res: Response,next:NextFunction)=>{
    let token:string = <string>req.get('Authorization');
    jwt.verify(token,config.SEED,(err: jwt.VerifyErrors,decoded)=>{
        console.log(decoded);
        if(err){
            res.status(401).json({
                ok:false,
                err
            });
            
        }
        req.user = <IUser>decoded['user'];
        next();
    });
};

export default verificationToken;