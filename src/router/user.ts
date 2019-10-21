import { Router, Request, Response } from "express";
import User, { IUser } from "../models/user";
import { NativeError } from "mongoose";



const userRoutes = Router();

userRoutes.post('/user', (req: Request, res: Response) => {
    let user: IUser = new User();
    user.name = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email;
    user.active = true;
    user.save((err, user) => {
        if (err) {
            res.json({
                ok: false,
                err
            });
            return;
        }
        res.json({
            ok: true,
            data: { user }
        });
    })

});

userRoutes.get('/user', (req: Request, res: Response) => {
    User.find().exec((err: NativeError, results: IUser[]) => {
        if (err) {
            res.json({
                ok: true,
                err
            });
            return;
        }
        res.json({
            ok: true,
            data: {
                users: results
            }
        })
    })
});

export default userRoutes;
