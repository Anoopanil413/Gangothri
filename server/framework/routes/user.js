import express from 'express';
import UserController from '../../controllers/userControllers.js';

export default function userRouter() {
  const router = express.Router();

  // POST endpoints
  console.log("route files running!!")

  const userController = UserController()

  router.route('/addUser').post(userController.addNewUser);

  return router;
}


