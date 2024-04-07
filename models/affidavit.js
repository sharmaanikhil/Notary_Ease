import mongoose,{Schema,model} from 'mongoose';

const skeema=new Schema({
    type:{
        type:String,
        required:true,
    },
    consumer:{
        type:Types.ObjectId,
        ref:"User",
    },
    issuer:{
        type:Types.ObjectId,
        ref:"User",
    },
    status:{
        type:String,
        default:"pending",
        enum:["pending","completed","rejected"],
    },
    price:{
        type:Number,
        required:true,
    },
    payment:{
        type:String,
        default:"not-done",
        enum:["not-done","partially-done","done"],
    },
    documnet:[
        {
            public_id:{
                type:String,
            },
            url:{
                type:String,
            },
        }
    ],
    timestamps:true,
});

export const Affidavit=mongoose.models.Affidavit||model("Affiavit",skeema);