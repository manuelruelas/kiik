import { Schema, model, Document, Mongoose, Types } from "mongoose";
import { IUser } from './user';

export interface IBloodRequest extends Document {
    publisher:IUser['_id'],
    typeRequired: IBloodRequest['_id'];
    description:string;
    requirements:string;
    createdAt:Date;
}

let bloodRequest = new Schema({
   publisher:{type: Types.ObjectId, required:true},
   typeRequired:{type:Types.ObjectId, required:true},
   descripton:{ type:String, required:true},
   requirements: {type:String, required:true},
   createdAt: {type:Date, default: Date.now}
});


export default model<IBloodRequest>('BloodRequest', bloodRequest);