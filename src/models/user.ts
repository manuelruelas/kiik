import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
    name: String;
    email: String;
    password: string;
    active: Boolean;
}

let userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    active: { type: Boolean, default: true }
});


export default model<IUser>('User', userSchema);