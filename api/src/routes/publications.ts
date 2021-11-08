import { Router } from 'express';
import {
    createPublication,
    getPublications,
    getPublication,
    getPublicationsWithFilters,
    getPublicationsFiltered,
    getPublicationsPerUser,
    getPublicationsCurrentUser,
    searchPublicationTitle,
    removePublication
} from '../controllers/publications';

const PublicationRouter = Router();

PublicationRouter.post('/new', createPublication);
PublicationRouter.get('/list/:lowerRange/:higherRange', getPublications);
PublicationRouter.get('/list-filters', getPublicationsWithFilters);
PublicationRouter.get('/list-filtered', getPublicationsFiltered);
PublicationRouter.get('/list-search-title', searchPublicationTitle);
PublicationRouter.get('/list-per-user/:id', getPublicationsPerUser);
PublicationRouter.get('/list-current-user', getPublicationsCurrentUser);
PublicationRouter.get('/:id', getPublication);
PublicationRouter.delete('/:id', removePublication);

export default PublicationRouter;
