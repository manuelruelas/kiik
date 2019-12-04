import { Router, Request, Response } from "express";
import User, { IUser } from "../models/user";
import { NativeError } from "mongoose";
import bcrytp = require('bcrypt');
import jwt = require('jsonwebtoken');
const userRoutes = Router();

userRoutes.post('/users', (req: Request, res: Response) => {
    let user: IUser = new User();
    user.name = req.body.name;
    user.password = bcrytp.hashSync(req.body.password,10);
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
        let token = jwt.sign({user},'secret-mr',{expiresIn:'48h'});
        res.json({
            ok: true,
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                token
            }
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
        let token = jwt
        res.json({
            ok: true,
            data: {
                users: results
            }
        })
    })
});

export default userRoutes;
