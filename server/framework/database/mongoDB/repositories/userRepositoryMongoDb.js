import UserModel from '../models/user.js'

export default function userRepositoryMongoDB() {

    const add = (userEntity) => {
      const newUser = new UserModel({
        username: userEntity.getUserName(),
        password: userEntity.getPassword(),
        email: userEntity.getEmail(),
        role: userEntity.getRole(),
        createdAt: new Date()
      });
  
      return newUser.save();
    };
  
    return {
      add
    };
  }