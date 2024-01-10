import addUser from "../application/usecases/user/add.js";



export default function userControllers(userDbRepository, userRepoMongo, authServiceInterface,
    authServiceImpl) {

    const dbRepository = userDbRepository(userRepoMongo());
    const authService = authServiceInterface(authServiceImpl());

    console.log("repo is here!", dbRepository)



    const addNewUser = (req, res, next) => {

        console.log("req is commingssssssssss", req.body)

        const { username, password, phone, email, role, createdAt } = req.body;
        addUser(
            username,
            password,
            email,
            phone,
            role,
            createdAt,
            dbRepository,
            authService
        )
            .then((user) => res.json(user))
            .catch((error) => next(error));
    };

    return {
        addNewUser
    };

}