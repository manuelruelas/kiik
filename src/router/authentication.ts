import { Request, Response, Router, Express } from "express";
import user from '../models/user';
import bcrypt = require('bcrypt');
import jwt = require('jsonwebtoken');
import config from '../config/config';
import verificationToken from "../middlewares/authentication";



let authRoutes = Router();

authRoutes.post('/login',verificationToken, (req: Request, res: Response) => {
    let body = req.body;
    user.findOne({ email: body.email }, (err, userDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!userDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'User or password incorrect'
                }
            });
        }
        if (!bcrypt.compareSync(body.password, userDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'User or (password) incorrect'
                }
            });
        }
        let token = jwt.sign({ user: userDB }, config.SEED, { expiresIn: config.TOKEN_EXPIRATION });

        return res.json({
            ok: true,
            data: {
                user: userDB,   
            },
            token: token
        })
    })

});
    

export default authRoutes;