import addUser from "../application/useCases/user.js";

export default function userControllers(userDbRepository,userRepoMongo){

    const dbRepository = userDbRepository(userRepoMongo());
    console.log(dbRepository)


    const addNewUser = (req, res, next) => {
        console.log("req is commingssssssssss",req.body)
        const { username, password, email, role, createdAt } = req.body;
        addUser(
          username,
          password,
          email,
          role,
          createdAt,
          dbRepository
        )
          .then((user) => res.json(user))
          .catch((error) => next(error));
      };

      return {
        addNewUser
      };

}