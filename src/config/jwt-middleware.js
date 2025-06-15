const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'twitter_secret'
}

const passportAuth = (passport) =>{
  passport.use(new JwtStrategy(options, async (jwt_payload, done) =>{
    const user = await User.findById(jwt_payload.id);
    if(!user){
      done(null, false);
    }
    else{
      done(null, user);
    }
  }))
}

module.exports = {passportAuth};