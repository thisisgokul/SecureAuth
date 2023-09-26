const express=require("express");
const router=express.Router();
const {getAll,signup,signin}=require("../controllers/controllers")

router.get('/api/all',getAll);
router.post('/api/signup',signup);
router.post('/api/signin',signin);

module.exports=router