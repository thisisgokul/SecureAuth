const express=require("express");
const router=express.Router();
const {getAll,signup,signin,google,logout }=require("../controllers/authControllers");
const {updateProfile,deleteProfile} = require("../controllers/userControllers");
const verifyToken = require("../utils/verifyToken");


router.get('/api/all',getAll);
router.post('/api/signup',signup);
router.post('/api/signin',signin);
router.post('/api/oauth',google);
router.get('/api/logout',logout);
router.put('/api/update/:id', verifyToken, updateProfile);
router.delete('/api/delete/:id', verifyToken, deleteProfile);

module.exports=router;