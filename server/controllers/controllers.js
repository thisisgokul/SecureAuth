const User =require( '../model/userModel')
const bcrypt = require('bcrypt');
const customError = require('../utils/error');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config()

const getAll=async(req,res)=>{
    await res.json({message:'hello World'})
}

const signup = async (req, res,next) => {
    const { name, email, password } = req.body;
    try {
       
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return next(customError(404,'email already exist'))
        }
        const hashedPassword = await bcrypt.hash(password, 10); 
        await User.create({ name, email, password: hashedPassword });

        res.json({ message: 'User created successfully' });
    } catch (error) {
       next(customError(300,'something went wrong'))
    }
}

const signin= async(req,res,next)=>{
    const {email,password}=req.body;
    try {
        const validUser=await User.findOne({email});
        if(!validUser){
            return next(customError(404,'user not found'));
        }
        const validatePassword=bcrypt.compareSync(password,validUser.password);
        if(!validatePassword){
            return next(customError(401,'Invalid credetionals'))
        }
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        const {password:hashedPassword,...rest}=validUser._doc;
        const expiryDate=new Date(Date.now()+ 3600000);
        res.cookie('token', token, { httpOnly: true, expires: expiryDate, secure: true, sameSite: 'Strict' });
        res.status(200).json(rest);
    } catch (error) {
        next(customError(error))
    }
}

module.exports={getAll,signup,signin};