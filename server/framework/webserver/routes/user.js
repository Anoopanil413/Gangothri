import userControllers from "../../../controllers/userControllers.js";
import userRepoMongo from "../../database/mongoDB/repositories/userRepositoryMongoDb.js";
import userRepository from "../../../application/repositories/userDbRepository.js";
import authService from "../../services/authService.js";
import express from 'express';

const router = express.Router()

const controller = userControllers(
    userRepository,
    userRepoMongo,
    authService
);



router.post('/register', controller.addNewUser)

export default router