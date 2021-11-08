import { Router } from 'express';
import { login, register } from '../controllers/auth';

const AuthRouter = Router();

AuthRouter.post('/login', login);
AuthRouter.post('/register', register);

export default AuthRouter;