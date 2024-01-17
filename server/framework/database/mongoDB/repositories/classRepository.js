import classModel from '../models/className'


export default function classRepositoryMongo(){
    const addClass= async(classEntity)=>{
        const newClass = new classModel({
            className:classEntity.className(),
            assigned:classEntity.assigned()

        })

        const ClassNew =  await newClass.save()
        return ClassNew

    }


    return{
        addClass
    }
}