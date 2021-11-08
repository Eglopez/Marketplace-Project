import { Router } from 'express';
import {
    deleteUser,
    getUsers,
    getUser,
    getCurrentUser
} from '../controllers/users';

const UserRouter = Router();

UserRouter.get('/list', getUsers);
UserRouter.get('/user/:id', getUser);
UserRouter.get('/current', getCurrentUser);
UserRouter.delete('/:id', deleteUser);

export default UserRouter;
