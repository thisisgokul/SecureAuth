const express=require("express");
const router=express.Router();
const {getAll,signup,signin,google,logout, getUserProfile}=require("../controllers/controllers");


router.get('/api/all',getAll);
router.post('/api/signup',signup);
router.post('/api/signin',signin);
router.post('/api/oauth',google);
router.get('/api/logout',logout);
router.get('/api/profile',getUserProfile);
module.exports=router