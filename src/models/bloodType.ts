
import { Schema, model, Document } from "mongoose";

export interface IBloodType extends Document {
    name:String,
    canReceive:[IBloodType['_id']],
    canDonate:[IBloodType['_id']]
}

let userSchema = new Schema({
    name:{type:String, required:true},
    canReceive:{type:[Schema.Types.ObjectId],default:[]},
    canDonate: {type:[Schema.Types.ObjectId], default:[]}
});


export default model<IBloodType>('BloodType', userSchema);