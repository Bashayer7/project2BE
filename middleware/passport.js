const JWTStrategy = require("passport-jwt").Strategy
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcrypt");
const {fromAuthHeaderAsBearerToken} = require ("passport-jwt").ExtractJwt
const {JWT_SECRET} = require("../config/keys")

exports.localStrategy = new LocalStrategy(async(username, password, done) => {
    try{
        const user=await User.findOne({username: username});
        const checkpassword = user ? await bcrypt.compare(password, user.password) : false;
        if(checkpassword) done(null, user)
        else done(null, false)

    }
    catch(error){
        done(error)
    }
});

exports.jwtStrtegy = new JWTStrategy(
    {
        jwtFromRequest: fromAuthHeaderAsBearerToken(),
        secretOrKey: JWT_SECRET,
    },
    async (jwtPayload, done) => {
        if (Date.now() > jwtPayload.exp) done(null, false);
        try{
            const user = await User.findOne({_id: jwtPayload.id});
            if (user) done(null, user);
            else done(null, false);
        }
        catch(error){
            done(error);
        }
    }
)