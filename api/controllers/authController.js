const User = require('../models/userModels');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');

const signToken = id => {
    return jwt.sign({id}, process.env.JWT_TOKEN, {
        expiresIn: process.env.JWT_TOKEN_EXPIRES_IN
    })
}
const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);

    user.password = undefined;
    user.confirmPwd = undefined;
    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user: user
        }
    });
    
}
exports.signup = async(req, res, next) => {
    const email = req.body.email;
    const resp = await User.findOne({email});
    if(resp){
        return next(new AppError('Email is already registered', 400));
    }
    const newUser = await User.create(req.body);
    createSendToken(newUser, 200, res);

}

exports.login = async(req, res, next) => {
    const {name, email, password} = req.body;
    console.log(req.headers.authorization);
    
    if (!email || !password){
        return next(new AppError('Invalid email or password', 400));
    }
    const user = await User.findOne({email}).select('+password');
    const correct = await user.correctPassword(password, user.password); // Sera true o false

    if(!user || !correct){
        return next(new AppError('Incorrect email or password', 400));
    }

    createSendToken(user, 200, res);    
}