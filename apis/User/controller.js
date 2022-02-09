const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET,JWT_EXP} = require("../../config/keys")
const passport = require ("passport");

const generateToken = (newUser) =>{
    const payload ={
        username: newUser.username,
        id: newUser.id,
        email: newUser.email,
        exp: Date.now()+ JWT_EXP
    };
    return jwt.sign(JSON.stringify(payload), JWT_SECRET);
}

exports.signUp = async (req, res, next) =>{
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = hashedPassword;
        const user= await User.create(req.body);
        const token = generateToken(user)
        res.json({token: token});
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}

exports.signIn = async (req, res, next) =>{
    const token = generateToken(req.user);
    res.status(200).json({token: token});
}