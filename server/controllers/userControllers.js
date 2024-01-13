import addUser from "../application/usecases/user/add.js";



export default function userControllers(userDbRepository, userRepoMongo, authServiceInterface,
    authServiceImpl,verificationInterface,
    verificationImpl) {

    const dbRepository = userDbRepository(userRepoMongo());
    const authService = authServiceInterface(authServiceImpl());
    const verifyService = verificationInterface(verificationImpl())

    const addNewUser = (req, res, next) => {
        const { username, password, phone, email, role, createdAt } = req.body;
        addUser(
            username,
            password,
            phone,
            email,
            role,
            createdAt,
            dbRepository,
            authService,
            verifyService
        )
            .then((user) => res.status(201).json(user))
            .catch((error) => next(error));
    };

    return {
        addNewUser
    };

}