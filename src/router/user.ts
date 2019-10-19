import { Router, Request, Response, response } from "express";
import User,{ IUser } from '../models/user';


const router = Router();

router.post('/user',(req:Request, res:Response)=>{
    
});

router.get('/user',(req:Request, res:Response)=>{
    res.json({
        ok:true,
        msg: "Everything is ok! "
    });
});

export default router;
