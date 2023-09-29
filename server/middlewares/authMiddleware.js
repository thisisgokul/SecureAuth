const jwt = require('jsonwebtoken');
const User = require('../model/userModel.js');
const dotenv=require('dotenv');
dotenv.config()

const protect =async (req, res, next) => {
    let token;
  
    token = req.cookies.token; 
    console.log('protected:',token);
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
        req.user = await User.findById(decoded.id)
  
        next();
      } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error('Not authorized, token failed');
      }
    } else {
      res.status(401);
      throw new Error('Not authorized, no token');
    }
  };
  
 module.exports=protect