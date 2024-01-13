import user from '../../../entities/users.js'

export default function addUser(
            username,
            password,
            phone,
            email,
            role,
            createdAt,
            userRepository,
            authService,
            verifyService


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
    .then(async(userWithPhone)=>{
        if(userWithPhone.length){
            throw new Error (`User with phone: ${phone} already exists`);
        }

        const response = await userRepository.add(newUser);
        const UserData = await userRepository.findByProperty({ email })
        let emailServ
        let otp
        if(UserData){
            const userId = UserData[0]._id
            const generateEmailToken = await verifyService.generateVeriToken(userId)
            const generateEmailLink = await verifyService.generateEmailLink(userId,generateEmailToken)
            const subject = "Hey there"
           const emailServ = await verifyService.sendMail(email,subject,generateEmailLink)
           await userRepository.findByIdAndUpdate(userId,'token',generateEmailToken)
           const otp =  await verifyService.sendOtp(phone)

        }
        return {response,emailServ,otp}
    })



}