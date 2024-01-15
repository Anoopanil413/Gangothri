
import userControllers from "../../../controllers/userControllers.js";
import userRepoMongo from "../../database/mongoDB/repositories/userRepositoryMongoDb.js";
import userRepository from "../../../application/repositories/userDbRepository.js";
import authServiceInterface from '../../../application/services/authService.js'
import authServiceImpl from '../../services/authService.js'
import verificationImpl from "../../services/verification.js";
import verificationInterface from "../../../application/services/verification.js";
import express from 'express';

const router = express.Router()

const controller = userControllers(
    userRepository,
    userRepoMongo,
    authServiceInterface,
    authServiceImpl,
    verificationInterface,
    verificationImpl
);



router.post('/register', controller.addNewUser)
router.get("/:id/verify/:token",controller.verifyMailToken)

export default router


