import { Schema, Mongoose, model } from "mongoose";

let userSchema = new Schema({
    name:{type:String,required: true},
    email: {type:String, required:true, unique:true},
    password:{ type:String, required:true},
    active:{type:Boolean, default:true}
})

module.exports = model('User',userSchema);