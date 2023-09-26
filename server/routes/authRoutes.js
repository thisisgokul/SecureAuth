const express=require("express");
const router=express.Router();
const {getAll,signup}=require("../controllers/controllers")

router.get('/api/all',getAll);
router.post('/api/signup',signup);

module.exports=router