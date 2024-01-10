import addUser from '../application/usecases/user/add.js';
import userRepositoryMongoDB from '../framework/database/mongoDB/repositories/userRepositoryMongoDb.js';




export default function UserController() {
    console.log("controllers working!!")

  let addNewUser = async (req, res, next) => {
    console.log("addNewUser is working")
    try {
      const { username, password, email, role, createdAt } = req.body;
      console.log("Controller - addNewUser details", username, password, email, role, createdAt);

      const user = await addUser(username, password, email, role, createdAt,userRepositoryMongoDB);
      res.status(201).json(user); 
    } catch (error) {
      console.error("Error in addNewUser:", error);
      next(error);
    }
  };

  return {
    addNewUser,
  };
}
