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

    console.log(newUser, userRepository)

    return userRepository
    .findByProperty({ email }) // Search by email
    .then((userWithEmail) => {
        if (userWithEmail.length) {
            throw new Error(`User with email: ${email} already exists`);
        }
        return userRepository.findByProperty({ username }); // Search by username
    })
    .then((userWithUsername) => {
        if (userWithUsername.length) {
            throw new Error(`User with username: ${username} already exists`);
        }
        return userRepository.findByProperty({ phone }); // Search by phone
    })
    .then((userWithPhone)=>{
        if(userWithPhone.length){
            throw new Error (`User with phone: ${phone} already exists`);
        }
        return userRepository.add(newUser);
    })


//  return userRepository
//         .findByProperty({ username })
//         .then((userWithUsername) => {
//             if (userWithUsername.length) {
//                 throw new Error(`User with username: ${username} already exists`);
//             }
//             return userRepository.findByProperty({ email });
//         })
//         .then((userWithEmail) => {
//             if (userWithEmail.length) {
//                 throw new Error(`User with email: ${email} already exists`);
//             }
//             return userRepository.findByProperty({ phone });

//         })
//         .then((userwithPhone)=>{
//             if(userwithPhone.length){
//                 throw new Error (`User with email: ${phone} already exists`);
//             }

//             return userRepository.add(newUser);
            
//         })

}