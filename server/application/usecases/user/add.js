import user from '../../../entities/users.js'

export default function addUser(
  username,
  password,
  phone,
  email,
  role,
  createdAt,
  userRepository,
  authService
) {
    if (!username || !password || !email) {
    throw new Error('username, password and email fields cannot be empty');
  }


  const newUser = new user(
    username,
    authService.encryptPassword(password),
    email,
    phone,
    role,
    createdAt
  );

  console.log(newUser,userRepository)


  return userRepository.add(newUser);


 

  

//   return mongoRepositoryDb
//     .findByProperty({ username })
//     .then((userWithUsername) => {
//       if (userWithUsername.length) {
//         throw new Error(`User with username: ${username} already exists`);
//       }
//       return mongoRepositoryDb.findByProperty({ email });
//     })
//     .then((userWithEmail) => {
//       if (userWithEmail.length) {
//         throw new Error(`User with email: ${email} already exists`);
//       }
//       return mongoRepositoryDb.add(newUser);
//     });


}