import classes from '../../../entities/class'


export default function addClass(className,assigned,classRepository){
    if (!className) {
        throw new Error('Class name cannot be Empty');
    }

    const newClass = new classes(
        className,assigned
    )

    // return classRepository.findByProperty({className})
    //         .then((className)=>)


}