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