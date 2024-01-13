export default function findByIdAndUpdate(userRepository,id,field,fieldValue){
    return userRepository.findByIdAndUpdate(id,field,fieldValue)

}