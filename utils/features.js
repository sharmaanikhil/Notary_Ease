import jwt from 'jsonwebtoken';

export const cooki=(res,user,message,status=200)=>{
    const token=jwt.sign({_id:user._id},process.env.JWT_SECRET);
    const isLawyer=user.isLawyer;
    res.status(201).cookie("token",token,{
        httpOnly:true,
        maxAge:15*60*1000,
        sameSite:process.env.NODE_ENV=="Development"?"lax":"none",
        secure:process.env.NODE_ENV==="Development"?false:true,
            }).json({
        success:true,
        message:message,
        isLawyer,
    })
}