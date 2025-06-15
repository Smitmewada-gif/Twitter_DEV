const {UserRepository} = require('../repository/index')
class UserService {
  constructor(){
    this.userRepository = new UserRepository();
  }

  async signUp(data){
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getUserByEmail(email){
    try {
      const user = await this.userRepository.findByEmail(email);
      return user;
    } catch (error) {
      throw error 
    }
  }

  async signin(data){
    try {
      console.log(data);
      const user = await this.getUserByEmail(data.email);
    if(!user){
      throw{
        message: "No user found",
        success: false
      };
    }

    if(!user.comparePassword(data.password)){
      throw {
        success: false,
        message: "Incorrect password"
      };
    }

    const token = user.genJwt();
    return token;
    } catch (error) {
      throw error;
    }
  }
}


module.exports = UserService;