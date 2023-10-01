const User = require('../model/userModel')
const bcrypt = require('bcrypt');
const customError = require('../utils/error');
const dotenv = require('dotenv');
dotenv.config()

  const updateProfile=async (req,res,next)=>{
    if (req.user.userId !== req.params.id) {
     
      return next(customError(401, 'You can update only your account!'));
    }
    try {
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      }
      
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            
          },
        },
        { new: true }
      );
      const { password, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  }

  const deleteProfile=async(req,res,next)=>{
    if(req.user.userId !== req.params.id){
      return next(customError(404,"you can only delete your account!!"))
    }
    try {
      await User.findByIdAndDelete(req.params.id);
      res.clearCookie('token');
      res.status(200).json("user successfully deleted");
    } catch (error) {
      next(customError(error))
    }
  }
module.exports={updateProfile,deleteProfile}