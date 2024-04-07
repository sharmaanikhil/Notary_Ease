import {User} from '../models/user.js';
import bcrypt from 'bcrypt';
import {cooki} from '../utils/features.js';

export const signup=async(req,res)=>{
     try{
        const {name,email,password,gender,contact,Uid,isLawyer}=req.body;
        const exist =await User.findOne({email});

        if(exist){
         return res.status(400).json({
            success:false,
            message:"user already exists",
         })
        }
        else if(isLawyer){
         const id=await User.findOne({Uid});
         if(id){
            return res.status(400).json({
               success:false,
               message:"Uid must be unique!",
               
            })
         }
        }
        const encrypt=await bcrypt.hash(password,10);
        const user=await User.create({
         name,
         email,
         password:encrypt,
         gender,
         contact,
         Uid,
         isLawyer,
        })
      cooki(res,user,"signup successfull!",201);
         
     }
     catch(error){
        console.log("error in signup:",error);
     }
}

export const login=async(req,res)=>{
   try{
      const {email,password}=req.body;
      const user=await User.findOne({email}).select("+password");
      if(!user){
         return res.status(404).json({
            success:false,
            message:"no email found!! signup first",
         })
      }
      const isMatch=await bcrypt.compare(password,user.password);
      if(!isMatch){
         return res.status(400).json({
            success:false,
            message:"wrong password",
         })
      }
      cooki(res,user,`Welcome Back ${user.name}`,201);
   }
   catch(error){
      console.log("error in login:",error);
   }
}

export const getMyProfile=async(req,res)=>{
   try{
      res.status(200).json({
         success:true,
         data:req.user,
      })
   }
   catch(error){
      console.log("error in get user information:",error);
   }
}

export const logout=async(req,res)=>{
   try{
      return res.status(200).cookie("token","",{
         maxAge:0,
      }).json({
         success:true,
         message:"logged out successfully",
      })
   }
   catch(error){
      console.log("error in logout:",error);
   }
}

export const getListOfLawyers=async(req,res)=>{
   try{
      const list=await User.find({isLawyer:true});
      const data=list.json;
      console.log(data);
      res.status(200).json({
         success:true,
         data,
      })
   }
   catch(error){
      console.log("error in fetching list:",error);
   }
}