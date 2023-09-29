const User = require('../model/userModel')
const bcrypt = require('bcrypt');
const customError = require('../utils/error');
const dotenv = require('dotenv');
const generateToken = require('../utils/generateToken');
dotenv.config()


const getAll = async (req, res) => {
  await res.json({ message: 'hello World' })
}

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return next(customError(404, 'email already exist'))
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });

    res.json({ message: 'User created successfully' });
  } catch (error) {
    next(customError(300, 'something went wrong'))
  }
}

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(customError(404, 'user not found'));
    }
    const validatePassword = bcrypt.compareSync(password, validUser.password);
    if (!validatePassword) {
      return next(customError(401, 'Invalid credetionals'))
    }
    generateToken(res, validUser._id);
    const { password: hashedPassword, ...rest } = validUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(customError(error))
  }
}

const google = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const userDoc = await User.create({
        name,
        email,
        password
      });

      generateToken(res, userDoc._id);
      const { password: hashedPassword, ...rest } = userDoc._doc;
      res.status(200).json(rest);
    } else {
      generateToken(res, existingUser._id);

      res.json(existingUser);
    }
  } catch (error) {
    next(customError(500, 'An error occurred during signup'));
  }
};

const logout = (req, res) => {
  try {
    res.clearCookie('token').status(200).json('Signout success!');
  } catch (error) {
    console.log(error);
  }
}

const getUserProfile = async (req, res) => {
  let token;

  token = req.cookies.token;
  try {
    console.log("profileTokenForchromegokul::", token)

  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAll, signup, signin, google, logout, getUserProfile };