
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

