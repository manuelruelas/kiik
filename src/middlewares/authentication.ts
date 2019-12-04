import jwt = require('jsonwebtoken');
import { NextFunction, Response, Request, RequestHandler } from 'express';
import config from '../config/config';
import RequestWithUser from '../interfaces/requestWithUser';
import { IUser } from '../models/user';
import { Dictionary } from 'express-serve-static-core';

let verificationToken:any = (req: RequestWithUser, res: Response,next:NextFunction)=>{
    let token:string = <string>req.get('Authorization');
    jwt.verify(token,config.SEED,(err: jwt.VerifyErrors,decoded:any)=>{
        console.log(decoded);
        if(err){
            res.status(401).json({
                ok:false,
                err
            });
            return;
        }
        req.user = <IUser>decoded.user;
        next();
    });

    
};

export default verificationToken;