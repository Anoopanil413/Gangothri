export default async function verifyEmailToken( id,token,userRepository,
    verifyService){

        try {

            const user = userRepository.findById(id)
            if(!user){
                throw new Error('Token cannot be verified!')
            }else if(user._id != id){
                throw new Error('Invalid user request!')
            }
            const tokenVerification = await verifyService.validateEmailToken(token)
            if(!tokenVerification){
                throw new Error('Invalid Token!')
            }
            const userId = tokenVerification.id
            const  userData = await userRepository.findById(userId)
            if(!userData) throw new Error('User not authenticated!')
            //please check here the way the update data is passed
            const updateUser = await userRepository.findByIdAndUpdate(id,'isVerified',true)
            return updateUser
        } catch (error) {
            console.log(error)
        }




}