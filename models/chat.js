import mongoose,{Schema,model} from 'mongoose';

const skeema=new Schema({
    name:{
        type:String,
        required:true,
    },
    members:[
        {
            type:Types.ObjectId,
            ref:"User",
        }
    ],

},
{
    timestamps:true,
})

export const Chat=mongoose.models.Chat||model("Chat",skeema)