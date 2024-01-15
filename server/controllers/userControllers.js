import addUser from "../application/usecases/user/add.js";
import verifyEmailToken from "../application/useCases/user/verifyEmail.js";



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

    const verifyMailToken = (req,res,next)=>{
        const{id,token} = req.params
        verifyEmailToken( id,token,dbRepository,
            verifyService)
            .then((res)=res.status(200).send(path.join(__dirname,'/server/public')))
            .catch((error)=>next(error))

    }

    return {
        addNewUser
    };

}