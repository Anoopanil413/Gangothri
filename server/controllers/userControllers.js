import addUser from "../application/usecases/user/add.js";


export default function userControllers(userDbRepository,userRepositoryMongoDB,authService){

    const dbRepository = userRepositoryMongoDB();
    const mongoRepository = userDbRepository()
    const addNewUser = (req, res, next) => {

        let { username, password, email, role, createdAt } = req.body;

        const auth = authService()
        const encryptPassword = auth.encryptPassword(password)
        password = encryptPassword

        console.log("encrypted pass-",encryptPassword)

        console.log("dbrepository mongo", dbRepository)
        addUser(
          username,
          email,
          password,
          role,
          createdAt,
          dbRepository,
          mongoRepository
        )
          .then((user) => res.json(user))
          .catch((error) => next(error));
      };

      return {
        addNewUser
      };

}