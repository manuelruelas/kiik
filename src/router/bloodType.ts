import { Router,Request,Response } from "express";
import BloodType, { IBloodType } from '../models/bloodType';
import { NativeError } from "mongoose";


const bloodTypeRoutes = Router();

bloodTypeRoutes.get('/bloodType',(req:Request, res:Response)=>{
    BloodType.find().exec((err:NativeError, results:IBloodType[])=>{
        if (err) {
            res.status(400).json({
                ok:false,
                err
            });
        }
        res.json({
            ok:true,
            results
        })
    });
});


export default bloodTypeRoutes;
