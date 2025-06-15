const {UserService} = require('../services/index');
const userService = new UserService();

const signUp = async(req, res) => {
  try {
    const response = await userService.signUp({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    });

    return res.status(201).json({
      data: response,
      error: {},
      success: true,
      message: 'Successfully created a new user'
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      error: error,
      success: true,
      message: 'Unable created a new user'
    });
  }
}

const signin = async(req, res) =>{
  try {
    console.log(req.body);
    const token = await userService.signin({email: req.body.email, password: req.body.password});
    return res.status(200).json({
      data: token,
      success: true,
      error: {},
      message: "Successfully logged in"
    })
  } catch (error) {
    return res.status(200).json({
      data: {},
      success: true,
      error: error,
      message: "Unable to log in"
    });
  }
}

module.exports = {signUp, signin};