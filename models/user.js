import mongoose,{Schema,model} from 'mongoose';

const skeema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    gender:{
        type:String,
    },
    contact:{
        type:Number,
        required:true,
    },
    Uid:{
        type:Number,
        unique:true,
    },
    isLawyer:{
        type:Boolean,
        required:true,
    }
})
 export const User=mongoose.models.User || model("User",skeema);