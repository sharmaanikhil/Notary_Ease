import {User} from "../models/user.js";
import jwt from "jsonwebtoken";
export const isAuthenticated=async(req,res,next)=>{
    try{
        const {token}=req.cookies;
    
        if(!token)return res.status(404).json({
            success:false,
            message:"login first",
        });
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        req.user=await User.findById(decode._id);
        next();
    }
    catch(error){
        console.log("error in authenticating:",error);
    }
}