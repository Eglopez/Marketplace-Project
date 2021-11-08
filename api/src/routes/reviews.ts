import { Router } from 'express';
import {
    addCommentToUser,
    addCommentToPublication,
    getUserComments,
    getPublicationComments,
    getUserQualification
} from '../controllers/comments';

const ReviewRouter = Router();

ReviewRouter.post('/user', addCommentToUser);
ReviewRouter.post('/publication', addCommentToPublication);
ReviewRouter.get('/list-user/:id', getUserComments);
ReviewRouter.get('/list-publication/:id', getPublicationComments);
ReviewRouter.get('/user-qualification/:id', getUserQualification);

export default ReviewRouter;
