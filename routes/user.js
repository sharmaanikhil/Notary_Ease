import express from 'express';
import {signup,login,getMyProfile,logout,getListOfLawyers} from '../controllers/user.js'
import {isAuthenticated} from '../middlewares/auth.js';

const router=express.Router();

router.post("/signup",signup);
router.post("/login",login);

router.get("/profile",isAuthenticated,getMyProfile);
router.post("/logout",isAuthenticated,logout);
router.get("/getList",isAuthenticated,getListOfLawyers);



export default router;