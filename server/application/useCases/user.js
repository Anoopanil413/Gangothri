
import user from '../../entities/users.js'

export default function addUser(  username,
    password,
    email,
    phone,
    role,
    userRepository,
    ){

        if (!username || !password || !email) {
            throw new Error('username, password and email fields cannot be empty');
          }

          const newUser = new user(
            username,
            password,
            email,
            phone,
            role
            
          );

          console.log(newUser,userRepository)


          return userRepository.add(newUser);

        

}