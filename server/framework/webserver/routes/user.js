<<<<<<< HEAD

import userControllers from "../../../controllers/userCotrollers.js"; 
import userRepoMongo from "../../databaseRepositories/userRepoMongo.js";
import userRepository from "../../../application/repositories/userDbRepository.js";
import express from 'express';
const router = express.Router()

const controller = userControllers(
       userRepository,
      userRepoMongo,
     );


        router.get('/l',(req,res)=>{
      console.log("heyyy world",req)
      res.json("hehhhhhhhhhhh")
    })

    router.post('/register',controller.addNewUser)

    export default router

=======
import userControllers from "../../../controllers/userControllers.js";
import userRepoMongo from "../../database/mongoDB/repositories/userRepositoryMongoDb.js";
import userRepository from "../../../application/repositories/userDbRepository.js";
import authServiceInterface from '../../../application/services/authService.js'
import authServiceImpl from '../../services/authService.js'
import express from 'express';

const router = express.Router()

const controller = userControllers(
    userRepository,
    userRepoMongo,
    authServiceInterface,
    authServiceImpl
);



router.post('/register', controller.addNewUser)

export default router
>>>>>>> a3bb25df88ddef2faf36c1941eeb905007e47554
