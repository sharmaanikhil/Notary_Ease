import mongoose,{Schema,model} from 'mongoose';

const skeema=new Schema({
    status:{
        type:String,
        default:"pending",
        enum:["pending","accepted","rejected"],
    },
    template:[
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
            }
        }
    ],
    sender:{
        type:Types.ObjectId,
        ref:"User",
        required:true,
    },
    receiver:[
        {
            type:Types.ObjectId,
            ref:"User",
            required:true,
        },
    ],
},
{
    timestamps:true,
})

 export const Lawyer=mongoose.models.Lawyer|| model("Lawyer",skeema);