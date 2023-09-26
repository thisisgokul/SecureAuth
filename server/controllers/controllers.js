const User =require( '../model/userModel')
const bcrypt = require('bcrypt');
const customError = require('../utils/error');

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

module.exports={getAll,signup};