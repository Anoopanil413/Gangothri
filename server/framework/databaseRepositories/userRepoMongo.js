
import UserModel from "../models/user.js"



export default function userRepoMongo(){
    const addUser = (userEntity) => {
        const newUser = new UserModel({
          username: userEntity.getUserName(),
          password: userEntity.getPassword(),
          email: userEntity.getEmail(),
          phone: userEntity.getPhone(),

          role: userEntity.getRole(),
          createdAt: new Date()
        });
    
        return newUser.save();
      };
      return {
        addUser
      };

}



