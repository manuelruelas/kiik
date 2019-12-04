import { Router, Request, Response } from "express";
import BloodRequest, { IBloodRequest } from "../models/bloodRequest";


const bloodRequestRoutes = Router();

bloodRequestRoutes.post('/bloodRequest', (req: Request, res: Response) => {
    const bloodRequest = new BloodRequest(req.body);
    bloodRequest.save((err, bloodRequest) => {
        if (err) {
            res.json({
                ok: false,
                err
            });
            return;
        }
        res.json({
            ok: true,
            data: { bloodRequest }
        });
    });
    
    
});
bloodRequestRoutes.get('/bloodRequest', (req: Request, res: Response) => {
    BloodRequest.find().exec((err, results) => {
        if (err) {
            res.status(500).json({
                ok: false,
                err
            });
            return;
        }
        res.json({
            ok: true,
            data: {
                bloodRequest: results
            },
        })
    });

});




export default bloodRequestRoutes;