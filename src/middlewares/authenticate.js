const passport = require('passport');

const authenticate = (req,res,next) =>{
  passport.authenticate('jwt', (err, user) =>{
    console.log("user", user);
    console.log("err", err);
    if(err) next(err);
    if(!user){
      return res.status(401).json({
        success: false,
        message: "Unauthorized access"
      });
    }
    req.user = user;
    next();
  })(req, res, next);
}
module.exports = {authenticate};